/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file347571224",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [
      "1024x680"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file347571224",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/avif"
    ],
    "name": "photo",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [
      "1024x680"
    ],
    "type": "file"
  }))

  return app.save(collection)
})
