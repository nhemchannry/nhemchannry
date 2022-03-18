import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./../theme";
import { Provider } from "react-redux";
import { useStore } from "@redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

export default MyApp;
