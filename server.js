const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
const buildDir = path.join(__dirname, 'dist')
const index = path.join(buildDir, 'index.html')

app.use(express.static(buildDir))

app.get('*', (req, res) => {
  res.sendFile(index)
})

app.listen(PORT, function () {
  console.log(`Express is executed on port ${PORT}`)
  console.log(`Build directory: ${buildDir}, index.html: ${index}`)
})
