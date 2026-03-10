/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // remove field
  collection.fields.removeById("geoPoint3218329231")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text794262873",
    "max": 0,
    "min": 0,
    "name": "lieu",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "geoPoint3218329231",
    "name": "localisation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "geoPoint"
  }))

  // remove field
  collection.fields.removeById("text794262873")

  return app.save(collection)
})
