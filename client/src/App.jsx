import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <UserContextProvider>
      <MainRoutes />
    </UserContextProvider>
  );
}

export default App;
