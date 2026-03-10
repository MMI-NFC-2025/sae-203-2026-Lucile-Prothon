/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // remove field
  collection.fields.removeById("text2638798251")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2638798251",
    "maxSelect": 1,
    "name": "genre_musical",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "tech",
      "percussion corporelle",
      "rock",
      "traditionnel"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file1285836561",
    "maxSelect": 99,
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

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

  // remove field
  collection.fields.removeById("select2638798251")

  // update field
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

  return app.save(collection)
})
