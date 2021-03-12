import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // pull and stor user from the dataLayer

  const [{ token }, dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    // clear the endurl
    window.location.hash = "";
    const _token = hash.access_token;
    // token inside memore
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // give the access token to spotify api
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("4ZL4KAvRJGcsrjw1vEVtrX").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
        spotify.getMyTopArtists().then((response) =>
          dispatch({
            type: "SET_TOP_ARTISTS",
            top_artists: response,
          })
        );
      });
    }
  }, [token, dispatch]);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
