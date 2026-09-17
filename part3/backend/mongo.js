const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give a password')
    process.exit(1)
}

const lv_password = encodeURIComponent(process.argv[2])

const lv_url = `mongodb+srv://olivhuet_db_user:${lv_password}@cluster0.clhx5yi.mongodb.net/NoteApp?appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(lv_url, { family: 4 })

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)
/*
const note = new Note({
    content: 'Let me see the result',
    important: true
})

note.save().then(result => {
    console.log('Note saved')
    console.log(result)
    mongoose.connection.close()
})
*/

Note.find( {} ).then(result => {
    result.forEach(note => console.log(note))
    mongoose.connection.close()
})