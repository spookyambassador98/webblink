const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3333;
const bodyparser = require('body-parser')


app.use('/public', express.static(__dirname + '/public'))
app.use('/', bodyparser.urlencoded({extended: false}))

const esp32Url = 'http://73.38.208.181'; // Replace with your ESP32's local IP address

app.get('/led/on', async (req, res) => {
  try {
    const response = await axios.get(`${esp32Url}/led/on`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error communicating with ESP32');
  }
});

app.get('/led/off', async (req, res) => {
  try {
    const response = await axios.get(`${esp32Url}/led/off`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error communicating with ESP32');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
