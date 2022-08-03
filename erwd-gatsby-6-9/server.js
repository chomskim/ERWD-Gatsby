const express = require('express')

const app = express()
const basicAuth = require('express-basic-auth')
const port = 3000

app.use(
  basicAuth({
    challenge: true,
    users: { admin: 'testing' },
  })
)
app.use(express.static(`${__dirname}/public`))
app.listen(port, () => {
  console.log(`Example app listening at
http://localhost:${port}`)
})
