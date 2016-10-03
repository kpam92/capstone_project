# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session` 
- `GET /api/session`

### Photos
(not nested in albums is for viewing photo on explore page, nested in albums indicated viewing a photo from an album)
- `GET /api/photos`
- `GET /api/photos/:id`
- `GET /api/albums/:AlbumId/photos`
- `GET /api/albums/:AlbumId/photos/:PhotoId`
- `POST /api/photos/:PhotoId`
- `PATCH /api/photos/:PhotoId`
- `DELETE /api/photos/:PhotoId`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:AlbumId/photos`

### Tags
(tags will be accessible to search through in search results, routes have room to update)
- `GET /api/tags`
- `POST /api/albums/:AlbumId/tags`
- `POST /api/albums/:AlbumId/photos/:PhotoId/tags`
- `DELETE /api/albums/:AlbumId/tags/:tag_name`
- `DELETE /api/albums/:AlbumId/photos/:PhotoId/tags/:tag_name`
