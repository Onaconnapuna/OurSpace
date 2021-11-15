class ProfilePhoto < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_photos do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
