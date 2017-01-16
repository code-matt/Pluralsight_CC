class CreateSubtractionTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :subtraction_types do |t|
      t.integer :question_id
    end
  end
end
