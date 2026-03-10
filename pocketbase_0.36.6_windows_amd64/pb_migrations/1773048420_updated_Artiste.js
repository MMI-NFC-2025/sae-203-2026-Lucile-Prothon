/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // update field
  collection.fields.addAt(6, new Field({
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
      "rock"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // update field
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

  return app.save(collection)
})
