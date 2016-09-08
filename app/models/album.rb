class Album < ApplicationRecord

  has_many(:photos,
             foreign_key: :album_id,
             class_name: 'Photo')

 belongs_to(:author,
            foreign_key: :author_id,
            class_name: 'User')
has_one(:cover_photo,
         foreign_key: :cover_photo_id,
         class_name: 'Photo')
end
