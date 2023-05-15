import { ThemeProvider } from "styled-components";
import TitleBar from "./components/TitleBar";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TitleBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
