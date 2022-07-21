// Next Imports
import Head from "next/head";
import { Router } from "next/router";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// Loader Import
import NProgress from "nprogress";

// Emotion Imports
import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/cache";

// Config Imports
import themeConfig from "../configs/ThemeConfig";

// Component Imports
import UserLayout from "../core/layouts/UserLayout";
import ThemeComponent from "../core/theme/ThemeComponent";

// Contexts
import {
  SettingsConsumer,
  SettingsProvider,
} from "../core/context/SettingsContext";

// Utils Imports
import { createEmotionCache } from "../core/utils";

// React Perfect Scrollbar Style
import "react-perfect-scrollbar/dist/css/styles.css";

// Global css styles
import "../../styles/globals.css";

// Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

// Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

// Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName}`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – Enjoy your life`}
        />
        <meta name="keywords" content="User, Planning, Management, Working" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                {getLayout(<Component {...pageProps} />)}
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
};

export default App;
