const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const STEAM_API_KEY = process.env.NEXT_PUBLIC_STEAM_API_KEY;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/getAppList', async (req, res) => {
  try {
    const response = await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching app list:', error);
    res.status(500).send('Error fetching app list');
  }
});

app.get('/getOwnedGames/:steamUserId', async (req, res) => {
  try {
    const { steamUserId } = req.params;
    const response = await axios.get(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${steamUserId}`,
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching owned games:', error);
    res.status(500).send('Error fetching owned games');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
