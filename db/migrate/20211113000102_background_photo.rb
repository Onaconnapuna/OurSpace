class BackgroundPhoto < ActiveRecord::Migration[5.2]
  def change

    create_table :background_photos do |t|
      t.integer :user_id

      t.timestamps
    end

  end
end
