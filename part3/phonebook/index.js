const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.static('dist'))
app.use(morgan('tiny'))
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

app.get('/info', (request, response) => {
    const numContact = persons.length
    const welcome = `<p>${Date()}</p>`
    const numberText = `<p>Phonebook has ${numContact} contacts`
    response.send(`${numberText}${welcome}`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const contact = persons.find(contact => contact.id === id)
    if (contact) return( response.json(contact) )
    return (response.status(404).send())
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(contact => contact.id !== id)
    response.status(204).send()
})

const generateId = () => {
    const newId = Math.floor(Math.random() * 1000000)
    return String(newId)
}
app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) return response.status(400).json({
        error: `Name is missing`
    })

    if (!body.number) return response.status(400).json({
        error: `Number is missing`
    })

    if (persons.find(contact => contact.name.toLowerCase() === body.name.toLowerCase()))
        return response.status(400).json({
            error: `Contact for ${body.name} already exists in Phonebook`})

   const newContact = {
    id: generateId(),
    name: body.name,
    number: body.number
   } 

   persons = persons.concat(newContact)
   return response.json(newContact)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})