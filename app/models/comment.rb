class Comment < ApplicationRecord
  belongs_to(:author,
             foreign_key: :author_id,
             class_name: 'User')
             
  belongs_to(:photo,
             foreign_key: :album_id,
             class_name: 'Photo')

end
