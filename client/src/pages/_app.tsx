import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { getThemeVariables } from "../lib/utils-theme";
import { store } from "../store";
import GlobalStyle from "../shared/GlobalStyle";

import { Hero } from "../components/layout/Hero";
import { SideNav } from "../components/layout/SideNav";
import { TopNav } from "../components/layout/TopNav";
import { Content } from "../components/layout/Content";
import { useTheme } from "../shared/hooks/useTheme";

const App = ({ Component, pageProps }: AppProps) => {
  useTheme();
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={getThemeVariables()}>
          <SideNav />
          <TopNav />
          <Hero />
          <Content>
            <Component {...pageProps} />
          </Content>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
