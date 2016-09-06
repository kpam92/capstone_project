# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'user1', password: 'password')
User.create!(username: 'Kpam', password: 'password', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg')
User.create!(username: 'SallyMander', password: 'password', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg')


Photo.create!(title:"Group Photo",medium:"digital", description:"2016 team",
             author_id:2, album_id:5, cover_photo: true,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_814/v1472767620/a1_g7gv2m.jpg")
Photo.create!(title:"Girl & Hands",medium:"ink",
             author_id:3, album_id:2, cover_photo: true,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472768974/girl_and_hands_y20osh.jpg")
Photo.create!(title:"Vanessa with flowers",medium:"film",
             author_id:3, album_id:2, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472768971/stephen_9010-2_rti9cb.jpg")
Photo.create!(title:"kevin",medium:"digital", description:"man and dog",
             author_id:2, album_id:1, cover_photo: true,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472746902/_MG_8090_kcryvq.jpg")


Photo.create!(title:"Kiyomi in the Desert",medium:"film",
             author_id:3, album_id:4, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473181575/IMG_0429_copy_luhghh.jpg")


Photo.create!(title:"Stephen with Ceramic",medium:"film",
             author_id:3, album_id:4, cover_photo: true,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473181573/stephen_ceramic_f6mno4.jpg")


Photo.create!(title:"Strength",medium:"illustration",
             author_id:3, album_id:3, cover_photo: true,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473181581/strength_tmze2m.jpg")


Photo.create!(title:"Crocodile Tears",medium:"illustration",
             author_id:3, album_id:3, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473181576/crocodile-tears_x6btuu.jpg")



Photo.create!(title:"Kelcey",medium:"digital",
             author_id:2, album_id:5, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_900/v1473198970/kelcey2_zw6fxd.jpg")



Photo.create!(title:"Jackie",medium:"digital",
             author_id:2, album_id:5, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_976/v1473198991/jac1_guias2.jpg")


Album.create!(title: "Main Gallery", author_id: 2, cover_photo_id: 4)
Album.create!(title: "Main Gallery", author_id: 3, cover_photo_id: 2)
Album.create!(title: "Illustration", author_id: 3, cover_photo_id: 7)
Album.create!(title: "Photography", author_id: 3, cover_photo_id: 5)
Album.create!(title: "ACA Photoshoot", author_id: 2, cover_photo_id: 1)
