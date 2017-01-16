class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.json :data
      t.integer :user_id
      t.integer :type_id
    end
  end
end
