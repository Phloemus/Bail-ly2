/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // update field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_74701798",
    "hidden": false,
    "id": "relation1616395646",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "occupant",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // update field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_74701798",
    "hidden": false,
    "id": "relation1616395646",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "occupants",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
