/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1767278655",
    "maxSelect": 1,
    "name": "currency",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "euro",
      "dollar"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // remove field
  collection.fields.removeById("select1767278655")

  return app.save(collection)
})
