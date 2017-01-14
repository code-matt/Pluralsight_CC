# admin

require 'csv'
require 'json'

# test1 = User.create(
#   email: 'qq@qq.com',
#   password: '12345678',
# )

# test2 = User.create(
#   email: 'q1@qq.com',
#   password: '12345678',
# )

def seed_all_the_things!
  options = {
    skip_blanks: true,
    headers: :first_row,
    col_sep: '|'
  }
  CSV.foreach("#{Rails.root}/db/cc_questions.csv", options).with_index do |row,i|
    if row.length > 0
      puts "Question: #{row[0].to_s}"
      puts "Answer: #{row[1].to_i}"
      puts "Distractors: #{row[2].split(',').map{ |answer| answer.delete(' ').to_i}}"

      ##todo: create records
    end
  end
end

seed_all_the_things!