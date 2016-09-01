# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'user1', password: 'password')
Photo.create!(title:"kevin",medium:"digital", description:"man and dog",
             author_id:1, album_id:1, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472746902/_MG_8090_kcryvq.jpg")
