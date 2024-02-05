'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
require('dotenv').config();

// Define an interface for the game data
interface Game {
  appid: number;
  playtime_forever: number;
}

interface ProcessedGame {
  gameName: string;
  timePlayed: string;
}

const STEAM_USER_ID = '76561198107119422';

async function getUserGames(): Promise<ProcessedGame[]> {
  try {
    // Fetch the list of all apps from backend
    const appListResponse = await axios.get('http://localhost:3001/getAppList');
    const appList = appListResponse.data.applist.apps;

    // Fetch the list of owned games for the user from backend
    // Update the URL in your frontend axios request
    const response = await axios.get(`http://localhost:3001/getOwnedGames/${STEAM_USER_ID}`);
    const games: Game[] = response.data.response.games;

    return games.map((game: Game) => {
      const appid = game.appid;
      const gameName = appList.find((app: any) => app.appid === appid)?.name || 'Unknown Game';
      const hoursPlayed = Math.floor(game.playtime_forever / 60);
      const minutesPlayed = game.playtime_forever % 60;
      const timePlayed = `${hoursPlayed}h ${minutesPlayed}m`;

      return {
        gameName,
        timePlayed,
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function Page() {
  const [games, setGames] = useState<ProcessedGame[]>([]);

  useEffect(() => {
    async function fetchData() {
      const gamesData = await getUserGames();
      setGames(gamesData);
      console.log(gamesData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Games</h1>
      <ul>
        {games.map((game: ProcessedGame, index: number) => (
          <li key={index}>
            <strong>{game.gameName}</strong> - {game.timePlayed}
          </li>
        ))}
      </ul>
    </div>
  );
}
