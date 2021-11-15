class Changecolums < ActiveRecord::Migration[5.2]
  def change

    remove_column :background_photos, :user_id
    remove_column :profile_photos, :user_id

    add_column :background_photos, :user_id, :integer, null:false 
    add_column :profile_photos, :user_id, :integer, null:false 
  end
end
