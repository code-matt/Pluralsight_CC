class CreateIndexes < ActiveRecord::Migration[5.0]
  def change
    add_index :questions, :type_id
  end
end
