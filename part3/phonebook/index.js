const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<p>Welcome</p>')
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})