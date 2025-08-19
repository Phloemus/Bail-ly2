// main.go
package main

import (
    "log"
    "time"
    "net/mail"

    "github.com/pocketbase/dbx"
    "github.com/pocketbase/pocketbase"
    //"github.com/pocketbase/pocketbase/core"
    "github.com/pocketbase/pocketbase/tools/mailer"
)

func main() {
    app := pocketbase.New()


    // Send rent reminder emails to the tenants as a reminder 
    app.Cron().MustAdd("rent-reminder-mail-sending-process", "03 13 * * *", func() {

        currentTime := time.Now()
        day := currentTime.Day()
	    log.Println("Sending reminder emails for this day : ", day)

        records, err := app.FindAllRecords("tenants",
            dbx.NewExp("dueDay = {:dueDay}", dbx.Params{"dueDay": day}),
        )

        if err != nil {
            log.Fatalf("Error fetching records from 'tenants' collection: %v", err)
        }

        errs := app.ExpandRecords(records, []string{"occupant"}, nil)
        if len(errs) > 0 {
            log.Fatal("failed to expand: %v", errs)
        }

        for _, record := range records {
            occupant := record.ExpandedOne("occupant")
            log.Println("sending email to", occupant.GetString("name"))
            message := &mailer.Message{
                From: mail.Address{
                    Address: app.Settings().Meta.SenderAddress,
                    Name:    app.Settings().Meta.SenderName,
                },
                To: []mail.Address{
                    {Address: occupant.GetString("email")},
                },
                Subject: "Rent reminder",
                HTML:    "Hello! your rent is due tomorrow, don't forget to pay it",
            }
            app.NewMailClient().Send(message)
        }

    })


    // pocketbase safe guard
    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
