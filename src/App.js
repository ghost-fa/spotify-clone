import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  // short time memore stor to save value and not lost if refrech
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    // clear the endurl
    window.location.hash = "";
    const _token = hash.access_token;
    // token inside memore
    if (_token) {
      setToken(_token);

      // give the access token to spotify api
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
    console.log("I have The Token", token);
  }, []);
  return (
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
