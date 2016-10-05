# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Album.destroy_all
Photo.destroy_all
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('photos')
ActiveRecord::Base.connection.reset_pk_sequence!('albums')
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('comments')

User.create!(username: 'user1', password: 'password')
User.create!(username: 'Kpam', password: 'password', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg')
User.create!(username: 'SallyMander', password: 'password', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg')
User.create!(username: 'Vyuric', password: 'password', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436799/static1.squarespace-3_iyeesy.jpg')
Album.create!(title: "Main Gallery", author_id: 2, description: "miscellaneous work",cover_photo_id: 4)
Album.create!(title: "Main Gallery", author_id: 3, description: "miscellaneous work", cover_photo_id: 2)
Album.create!(title: "Illustration", author_id: 3, description:"Illustrations and self portraits created  this past year", cover_photo_id: 7)
Album.create!(title: "Photography", author_id: 3, description:"various photographs taken throughout the years", cover_photo_id: 5)
Album.create!(title: "ACA Photoshoot", author_id: 2, description:"selects from the ACA photoshoot of the 2016 team", cover_photo_id: 3)
Album.create!(title: "Main Gallery", author_id: 4, cover_photo_id: 11)
Album.create!(title: "Doodles", author_id: 4, description:"my doodles when i'm bored...", cover_photo_id: 17)
Album.create!(title: "Family Portraits", author_id: 2, description: "The documentation of man and dog.", cover_photo_id: 22)
Album.create!(title: "Main Gallery", author_id: 1, description: "some of my work over the years", cover_photo_id: 10)
Album.create!(title: "Photography", author_id: 1, description: "Various self portraits", cover_photo_id: 25)


Photo.create!(title:"Girl & Hands",medium:"ink",
             author_id:3, album_id:2, cover_photo: true,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472768974/girl_and_hands_y20osh.jpg")

Photo.create!(title:"Vanessa with flowers",medium:"film",
             author_id:3, album_id:2, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472768971/stephen_9010-2_rti9cb.jpg")

Photo.create!(title:"Group Photo",medium:"digital", description:"2016 team",
             author_id:2, album_id:5, cover_photo: true,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_814/v1472767620/a1_g7gv2m.jpg")

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

Photo.create!(title:"Sam in the Light",medium:"Film",
             author_id:1, album_id:9, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475644488/Screen_Shot_2016-10-04_at_10.13.48_PM_m1ndro.png")

Photo.create!(title:"Self-Portrait",medium:"Digital",
             author_id:1, album_id:9, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475643434/Screen_Shot_2016-10-04_at_9.48.43_PM_e1zcgt.png")

Photo.create!(title:"Wilting Flower",medium:"Collage",
             author_id:4, album_id:6, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436073/Screen_Shot_2016-09-09_at_8.38.35_AM_yx5igi.png")

Photo.create!(title:"Lucky Snake",medium:"Collage",
             author_id:4, album_id:6, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436076/Screen_Shot_2016-09-09_at_8.38.51_AM_vzb003.png")

Photo.create!(title:"Tru luv",medium:"Collage",
             author_id:4, album_id:6, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436063/static1.squarespace-2_v4hnf6.jpg")

Photo.create!(title:"Untitled Sculpture",medium:"sculpture",
             author_id:4, album_id:6, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436130/VYC_w6kgxx.jpg")

Photo.create!(title:"Willie & Jasmine",medium:"Printmaking",
             author_id:1, album_id:9, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475605205/Screen_Shot_2016-10-04_at_11.16.38_AM_gkrvll.png")

Photo.create!(title:"Vanessa in Orange",medium:"Highlighter",
             author_id:1, album_id:9, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475605212/Screen_Shot_2016-10-04_at_11.17.31_AM_cdymzc.png")

Photo.create!(title:"Spaghetti",medium:"pencil",
             author_id:4, album_id:7, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436073/static1.squarespace-1_gzv0dc.jpg")

Photo.create!(title:"Melodrama",medium:"pencil",
             author_id:4, album_id:7, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436071/static1.squarespace_h8slic.jpg")

Photo.create!(title:"Christmas",medium:"Digital",
             author_id:2, album_id:8, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_1173/v1473437412/_MG_0586_njy7bg.jpg")

Photo.create!(title:"Ridin'",medium:"Digital",
             author_id:2, album_id:8, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_915/v1473437403/_MG_6804_dkqzkq.jpg")

Photo.create!(title:"Unconditional Love",medium:"Digital",
             author_id:2, album_id:8, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473437330/10704359_10152585715538893_2228425815389816462_o_hdx2nf.jpg")

Photo.create!(title:"Graduation",medium:"Digital",
             author_id:2, album_id:8, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_1052/v1473437458/grad_arucmt.jpg")

Photo.create!(title:"Kelcey",medium:"digital",
             author_id:2, album_id:5, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_900/v1473198970/kelcey2_zw6fxd.jpg")

Photo.create!(title:"Jackie",medium:"digital",
             author_id:2, album_id:5, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_976/v1473198991/jac1_guias2.jpg")


Photo.create!(title:"Temple in Thailand",medium:"digital",
             author_id:1, album_id:10, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475605216/Screen_Shot_2016-10-04_at_11.16.14_AM_cnbhim.png")

Photo.create!(title:"Scuba Diving",medium:"digital",
             author_id:1, album_id:10, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475645351/Screen_Shot_2016-10-04_at_9.50.03_PM_mlpdfe.png")

Photo.create!(title:"Mission Peak View",medium:"digital",
             author_id:1, album_id:10, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475645389/Screen_Shot_2016-10-04_at_9.49.30_PM_flc5yc.png")

Photo.create!(title:"Conchita",medium:"digital",
             author_id:1, album_id:10, cover_photo: false,
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475645083/Screen_Shot_2016-10-04_at_10.12.59_PM_sxf7oc.png")










Comment.create!(body: "wow so cool", author_id: 1, photo_id: 2)
Comment.create!(body: "omg so dramatic", author_id: 1, photo_id: 1)
Comment.create!(body: "I have a lot of feelings OKAY", author_id: 3, photo_id: 1)
Comment.create!(body: "Nice shirt!", author_id: 2, photo_id: 6)
Comment.create!(body: "I love blue.", author_id: 2, photo_id: 10)
Comment.create!(body: "looks like yall are having fun!", author_id: 2, photo_id: 26)
Comment.create!(body: "nice :)", author_id: 2, photo_id: 17)
Comment.create!(body: "I look so sad here :/", author_id: 4, photo_id: 2)
Comment.create!(body: "dig the sweaters", author_id: 4, photo_id: 4)
Comment.create!(body: "WOW!", author_id: 4, photo_id: 1)
Comment.create!(body: "red is where it's at", author_id: 4, photo_id: 9)
Comment.create!(body: "dawww", author_id: 4, photo_id: 21)
Comment.create!(body: "i dig it dood", author_id: 4, photo_id: 24)
Comment.create!(body: "CATS", author_id: 4, photo_id: 23)
Comment.create!(body: "that jawline!", author_id: 4, photo_id: 28)
Comment.create!(body: "^^", author_id: 3, photo_id: 9)
Comment.create!(body: "very cool wow", author_id: 3, photo_id: 12)
Comment.create!(body: "nice colors", author_id: 3, photo_id: 13)
Comment.create!(body: "LOL", author_id: 3, photo_id: 19)
Comment.create!(body: "biker boiz", author_id: 3, photo_id: 20)
Comment.create!(body: "looks like a kool team!", author_id: 1, photo_id: 3)
