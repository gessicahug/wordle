const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/word', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://palavras-aleatorias.p.rapidapi.com/words/5/1',
    headers: {
      'X-RapidAPI-Key': '7e4ebd6f1bmsh94179a63aafd85cp131563jsndbddcd4d3b86',
      'X-RapidAPI-Host': 'palavras-aleatorias.p.rapidapi.com'
    }
  };
  axios.request(options).then((response) => {
    console.log(response.data[0].word)
    res.json(response.data[0].word)
  }).catch((error) => {
    console.error(error)
  })
})


// app.get('/check', (req, res) => {
//   const word = req.query.word

//   const options = {
//     method: 'GET',
//     url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
//     params: { entry: word },
//     headers: {
//       'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
//       'x-rapidapi-key': process.env.RAPID_API_KEY
//     }
//   }
//   axios.request(options).then((response) => {
//     console.log(response.data)
//     res.json(response.data.result_msg)
//   }).catch((error) => {
//     console.error(error)
//   })
// })


app.listen(PORT, () => console.log('Server running on port ' + PORT))
