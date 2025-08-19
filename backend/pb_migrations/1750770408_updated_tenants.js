/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number3275789471",
    "max": null,
    "min": null,
    "name": "dueDay",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_699394385")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number3275789471",
    "max": null,
    "min": null,
    "name": "dueDate",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
