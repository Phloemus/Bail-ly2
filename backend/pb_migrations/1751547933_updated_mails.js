/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2820579054")

  // remove field
  collection.fields.removeById("relation2539659139")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2820579054")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_806950522",
    "hidden": false,
    "id": "relation2539659139",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "template",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
