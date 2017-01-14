require 'csv'
require 'json'

def seed_all_the_things!

  user1 = User.create(
    email: 'matt@matt.com',
    password: '12345678',
  )

  options = {
    skip_blanks: true,
    headers: :first_row,
    col_sep: '|'
  }
  CSV.foreach("#{Rails.root}/db/cc_questions.csv", options).with_index do |row,i|
    if row.length > 0
      Question.create(
        body: row[0].to_s,
        data: {
          correct: row[1].to_i,
          distractors: row[2].split(',').map{ |answer| answer.delete(' ').to_i}
        },
        user_id: user1.id)
    end
  end
end

seed_all_the_things!