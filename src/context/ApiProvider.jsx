import { useEffect, useState, createContext } from "react";
import axios from "axios";

const ApiContext = createContext({});

const ApiProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );
  const [data, setData] = useState({});

  const endPoint = "https://api.spotify.com/v1/me/playlists";


  useEffect(() => {
    
    if (token !== null) {
      const getPLayList = async () => {
        axios
          .get(endPoint, {
            headers: {
              Authorization: `${
                "Bearer " + localStorage.getItem("token") 
              }`,
              "content-type": "application / json",
            },
          })
          
          .then((response) => {
            setData(response.data);
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getPLayList();
    }
  }, [token]);

  return (
    <ApiContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider };
export default ApiContext;
