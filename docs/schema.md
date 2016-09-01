# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
imag_url    | string    | not null
medium      | string    |
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
album_id    | integer   | not null, foreign key (references album), indexed
cover_photo | boolean | default: false (references the cover photo of the album)

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## photo_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
photo_id    | integer   | not null, foreign key (references photo), indexed

## album_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
album_id    | integer   | not null, foreign key (references photo), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references photos), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
