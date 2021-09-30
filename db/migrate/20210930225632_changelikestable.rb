class Changelikestable < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :post_id
    remove_column :likes, :comment_id

    add_column :likes, :post_id, :integer
    add_column :likes, :comment_id, :integer
  end
end
