const express = require('express')
const cors = require('cors')
const app = express()
const { Client } = require('pg')

const port = process.env.PORT || 3000

app.use(cors())

console.log("PGSSLROOTCERT", process.env.PGSSLROOTCERT)

// const client = new Client({
//   connectionString: process.env.DATABASE_URL.split("?")[0],
//   ssl: {
//     rejectUnauthorized: true,
//     ca: process.env.CA_CERT
//   }
// })
const client = new Client({ connectionString: process.env.DATABASE_URL })
client.connect()
  .then(() => console.log('connected!'))
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
