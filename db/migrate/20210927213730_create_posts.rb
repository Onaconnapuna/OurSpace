class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|

      t.integer :user_id, null: false 
      t.integer :poster_id, null: false 
      t.text :body, null: false 

      t.timestamps
    end
  end
end
