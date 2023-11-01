import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./utils/MainTheme";
import HomePage from "./components/HomePage";
import "./App.css";
import Seo from "./components/Seo";
function App() {
  return (
    <>
      <Seo />
      <ThemeProvider theme={mainTheme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
