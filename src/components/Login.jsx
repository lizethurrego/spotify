import { useEffect, useContext } from "react";
import ApiContext from "../context/ApiProvider";
import Lists from "./Lists";

const Login = () => {
  const CLIENT_ID = "9a5f414b8bc84f80add0cf79e072ec90";
  const REDIRECT_URL = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const { token, setToken, data } = useContext(ApiContext);

  useEffect(() => {
    const hash = window.location.hash;
    let tokens;
    if (hash) {
      tokens = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      localStorage.setItem("token", tokens);
      setToken(tokens);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <div className="bg-black h-screen flex items-center flex-col justify-center">
        <header className="flex items-center">
          <img
            className="max-w-[7rem] max-h-[7rem] mr-[2.25rem] "
            src="../../public/logoG.png"
            alt="logo spotify"
          />
          <h1 className="text-white font-semibold text-9xl ">Spotify</h1>
        </header>

        {!token ? (
          <a
            className="bg-green-400 rounded-lg w-[11rem] h-[2.5rem] mt-[3.75rem] hover:bg-green-600 flex items-center justify-center"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <div>
            <button
              className="bg-green-400 rounded-lg w-[11rem] h-[2.5rem] mt-[3.75rem] hover:bg-green-600"
              onClick={logout}
            >
              log out
            </button>
            <Lists/>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
