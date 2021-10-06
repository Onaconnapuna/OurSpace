class Addusercolumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birthday, :string
    add_column :users, :gender, :string
    add_column :users, :bio, :text
  end
end
