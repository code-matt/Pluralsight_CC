require 'csv'
require 'json'

def seed_all_the_things!

  user1 = User.create(
    email: 'matt@matt.com',
    password: '12345678',
  )

  user2 = User.create(
    email: 'joe@matt.com',
    password: '12345678',
  )

  user3 = User.create(
    email: 'tim@matt.com',
    password: '12345678',
  )

  user4 = User.create(
    email: 'kurt@matt.com',
    password: '12345678',
  )

  user5 = User.create(
    email: 'kim@matt.com',
    password: '12345678',
  )

  user6 = User.create(
    email: 'lou@matt.com',
    password: '12345678',
  )

  user7 = User.create(
    email: 'cooper@matt.com',
    password: '12345678',
  )

  user8 = User.create(
    email: 'mike@matt.com',
    password: '12345678',
  )

  add = Type.create(
    name: 'AdditionType'
  )

  mult = Type.create(
    name: 'MultiplicationType'
  )

  sub = Type.create(
    name: 'SubtractionType'
  )

  options = {
    skip_blanks: true,
    headers: :first_row,
    col_sep: '|'
  }
  questions = []
  CSV.foreach("#{Rails.root}/db/cc_questions.csv", options).with_index do |row,i|
    if row.length > 0
      char = /[^\w\? ]/.match(row[0].to_s)
      case char.to_s
        when '*'
          typeID = mult.id
        when '+'
          typeID = add.id
        when '-'
          typeID = sub.id
      end
      question = Question.create(
        data: {
          body: row[0].to_s,
          correct_answer: row[1].to_i,
          distractors: row[2].split(',').map{ |answer| answer.delete(' ').to_i}
        },
      user_id: user1.id,
      type_id: typeID)
      questions << question
    end
  end
  1000.times do
    question = questions.sample
    correct = [true, false].sample
    if correct
      Answer.create(
        user_id: (1..8).to_a.sample,
        question_id: question.id,
        correct: true,
        answer: question.data['correct_answer'])
    else
      Answer.create(
        user_id: (1..8).to_a.sample,
        question_id: question.id,
        correct: false,
        answer: question.data['distractors'][0])
    end
  end
end

seed_all_the_things!