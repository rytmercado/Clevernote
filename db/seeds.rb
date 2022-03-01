# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all


demouser = User.create(email: 'demo@clevernote.com', password: 'password')
demonote = Note.create(title: 'Dave Matthews Band', body: 'is the best band!', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote2 = Note.create(title: 'Homework', body: 'finish project', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote3 = Note.create(title: 'chase your dreams, fool', body: 'life is short', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote4 = Note.create(title: 'todo', body: 'clean, study, ski', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote5 = Note.create(title: 'one last note', body: 'here it is', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonotebook2 = Notebook.create(subject: 'Notebook_2', user_id: demouser.id)
demonote5 = Note.create(title: 'second notebook tester', body: 'does it work?', user_id: demouser.id, notebook_id: demonotebook2.id)
