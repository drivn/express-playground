const express = require('express')
const cors = require('cors')
const app = express()
const { Client } = require('pg')

const port = process.env.PORT || 3000

app.use(cors())

const connectionString = `${process.env.DATABASE_URL}&sslrootcert=${process.env.CA_CERT}`
console.log({connectionString})

const client = new Client({ connectionString })
client.connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack))

// client
//   .query('SELECT NOW()')
//   .then((result) => console.log(result))
//   .catch(e => console.error(e.stack))
//   .then(() => client.end())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
