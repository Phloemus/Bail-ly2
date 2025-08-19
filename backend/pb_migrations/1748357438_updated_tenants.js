/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // update field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3103561403",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "occupants",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
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
      "USD",
      "EUR"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // update field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3103561403",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "tenants",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
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
})
