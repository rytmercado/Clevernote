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
Tag.destroy_all
NoteTag.destroy_all


demouser = User.create(email: 'demo@clevernote.com', password: 'password')
demonote = Note.create(title: 'Dave Matthews Band', body: 'is the best band!', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote2 = Note.create(title: 'Homework', body: 'finish project', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote3 = Note.create(title: 'chase your dreams, fool', body: 'life is short', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote4 = Note.create(title: 'todo', body: 'clean, jam, ski', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonote5 = Note.create(title: 'one last note', body: 'here it is', user_id: demouser.id, notebook_id: demouser.notebooks.first.id)
demonotebook2 = Notebook.create(subject: 'Clevernote Todos', user_id: demouser.id)
demonote5 = Note.create(title: 'Styling', body: 'New note button, session modals,', user_id: demouser.id, notebook_id: demonotebook2.id)
demonote6 = Note.create(title: 'Back End', body: 'Tags, Note Tags tables', user_id: demouser.id, notebook_id: demonotebook2.id)
demonote7 = Note.create(title: 'Testing', body: 'more content here...', user_id: demouser.id, notebook_id: demonotebook2.id)

demonotebook3 = Notebook.create(subject: 'Notebook_3', user_id: demouser.id)
demonotebook4 = Notebook.create(subject: 'Notebook_4', user_id: demouser.id)

tag1 = Tag.create(name: 'music', user_id: demouser.id)
tag2 = Tag.create(name: 'coding', user_id: demouser.id)
tag3 = Tag.create(name: 'quotes', user_id: demouser.id)

note_tag1 = NoteTag.create(note_id: demonote.id, tag_id: tag1.id)
note_tag2 = NoteTag.create(note_id: demonote.id, tag_id: tag3.id)
note_tag3 = NoteTag.create(note_id: demonote2.id, tag_id: tag2.id)
note_tag4 = NoteTag.create(note_id: demonote3.id, tag_id: tag3.id)
note_tag5 = NoteTag.create(note_id: demonote4.id, tag_id: tag2.id)
note_tag6 = NoteTag.create(note_id: demonote4.id, tag_id: tag1.id)



