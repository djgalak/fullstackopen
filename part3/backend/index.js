// const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')
const Note = require('./models/note')
const app = express()

const PORT = process.env.PORT
/*
// Connecting to MongoDB
const password = process.argv[2]
const url = `mongodb+srv://olivhuet_db_user:${password}@cluster0.clhx5yi.mongodb.net/NoteApp?appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(url, {family: 4})
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const Note = mongoose.model('Note', noteSchema)
*/

app.use(express.static('dist'))
app.use(express.json())

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1')
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(note => Number(note.id)))
    : 0
    return String(maxId + 1)
}


app.post('/api/notes', (request,response) => {
  const body = request.body
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId()
  }

  notes = notes.concat(note)

  response.json(note)
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find( note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})