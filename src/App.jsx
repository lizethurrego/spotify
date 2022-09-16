import Login from "./components/Login";
import { ApiProvider } from "./context/ApiProvider";
import Lists from "./components/Lists";

function App({data}) {

  return (
    <>
      <ApiProvider>
        <Login />
        
      </ApiProvider>
    </>
  );
}
export default App;
