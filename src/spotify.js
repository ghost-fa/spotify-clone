export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "b4fa7027b8dd4a038984f96e62d14be9";

const scopes = [
  `user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state`,
];

// get the acces token from response

export const getTokenFromUrl = () => {
  // go to url go to the pont / hash
  return (
    window.location.hash
      // get the first object
      .substring(1)
      // split the object
      .split("&")
      // #accesToken=mysuperkey&name=bla&fgf
      //like split the = sign
      .reduce((intial, item) => {
        let parts = item.split("=");
        intial[parts[0]] = decodeURIComponent(parts[1]);

        return intial;
      }, {})
  );
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%/20"
)}&response_type=token&show_dialog=true`;
