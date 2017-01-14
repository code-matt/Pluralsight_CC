class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :body
      t.json :answers
      t.integer :user_id
    end
  end
end
