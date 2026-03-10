/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date648974043",
    "max": "",
    "min": "",
    "name": "date_representation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3556671029",
    "hidden": false,
    "id": "relation3648647130",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "scene",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file1596439714",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo_principale",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file1285836561",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "gallerie_photo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2638798251",
    "max": 0,
    "min": 0,
    "name": "genre_musical",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // remove field
  collection.fields.removeById("text1843675174")

  // remove field
  collection.fields.removeById("date648974043")

  // remove field
  collection.fields.removeById("relation3648647130")

  // remove field
  collection.fields.removeById("file1596439714")

  // remove field
  collection.fields.removeById("file1285836561")

  // remove field
  collection.fields.removeById("text2638798251")

  return app.save(collection)
})
