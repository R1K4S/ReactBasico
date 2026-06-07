import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppContextProvider } from "./contexts";

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export { App };
