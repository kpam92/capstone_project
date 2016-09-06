# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160906021937) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",          null: false
    t.text     "description"
    t.integer  "author_id",      null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "cover_photo_id", null: false
    t.index ["author_id"], name: "index_albums_on_author_id", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.string   "title",                       null: false
    t.string   "medium"
    t.text     "description"
    t.integer  "author_id",                   null: false
    t.integer  "album_id",                    null: false
    t.boolean  "cover_photo", default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "image_url",                   null: false
    t.index ["album_id"], name: "index_photos_on_album_id", using: :btree
    t.index ["author_id"], name: "index_photos_on_author_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                 null: false
    t.string   "password_digest",                                                                                          null: false
    t.string   "session_token",                                                                                            null: false
    t.datetime "created_at",                                                                                               null: false
    t.datetime "updated_at",                                                                                               null: false
    t.string   "profile_pic",     default: "http://res.cloudinary.com/dt5viyxyq/image/upload/v1472832936/user_xczx2f.png"
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
