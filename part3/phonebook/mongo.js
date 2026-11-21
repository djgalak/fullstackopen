const mongoose = require('mongoose')

if (process.argv.length != 5 && process.argv.length != 3){
    console.log('Number of arguments not correct')
    process.exit(1)
}

const lv_password = process.argv[2]

const lv_url = `mongodb+srv://olivhuet_db_user:${lv_password}@cluster0.clhx5yi.mongodb.net/PhonebookApp?appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(lv_url, {family: 4})
const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String
})
const Phonebook = mongoose.model('Phonebook', phonebookSchema)


if (process.argv.length === 3) {
    Phonebook.find({}).then(result => {
        if (result.length === 0) {
            console.log('Phonebook is empty')
        } else {
        console.log('phonebook:')
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
    })}
        mongoose.connection.close()
    })
}
if (process.argv.length === 5 ) {
    const lv_name = process.argv[3]
    const lv_number = process.argv[4]

    const person = new Phonebook({
        name: lv_name,
        number: lv_number
    })

    person.save().then( result => {
        console.log(`Added ${lv_name} number ${lv_number} to phonebook`)
        mongoose.connection.close()
    })
}

