class AddColumnToPhotosTable < ActiveRecord::Migration[5.0]
  def up
    add_column :photos, :image_url, :string, null: false
  end
end
