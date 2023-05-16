import { ThemeProvider } from "styled-components";
import TitleBar from "./components/TitleBar";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TitleBar />
        <SideBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
