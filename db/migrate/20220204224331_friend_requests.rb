class FriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :user_id, null: false 
      t.integer :friend_id, null: false

      t.timestamps
    end
  end
end
