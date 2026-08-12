const express = require('express')
const app = express()

app.use(express.json())

let persons = 
[
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const numberPersons = persons.length
    const receivedAt = new Date()
    const infoPage = `<div>Phonebook has info for ${numberPersons} people</div><div>${receivedAt}</div>`
    response.send(infoPage)
})

app.get('/api/persons/:id', (request, response) => {
    console.log(`requested`)
    const id = request.params.id
    const person = persons.find( person => person.id === id)
    person
        ? response.json(person)
        : response.status(404).end()
})

const generateId = () => {
    const max = 1000000
    return Math.floor(Math.random() * max)
}

app.post('/api/persons', (request,response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: 'name is missing'
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'number is missing'
        })
    }

    if (persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())) {
        console.log(`Name ${body.name} already exists`)
        return response.status(400).json({
            error: `name must be unique`
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    console.log('person added:', person)
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter( person => person.id !== id)
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})