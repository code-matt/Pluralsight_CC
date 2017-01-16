class CreateAdditionTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :addition_types do |t|
      t.integer :question_id
    end
  end
end
