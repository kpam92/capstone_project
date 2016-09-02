class Addnewcolumntousers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_pic, :string, default: "http://res.cloudinary.com/dt5viyxyq/image/upload/v1472832936/user_xczx2f.png"
  end
end
