import { AppProps } from "$fresh/server.ts";
import { Language } from "../i18n.ts";

export default function App(props: AppProps<unknown, Language>) {
  const { Component, state } = props;

  return (
    <html lang={state.language?.split("-")[0] ?? "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>the-red-clock</title>
      </head>
      <body class="bg-gray-200 dark:bg-gray-800 dark:text-white">
        <Component />
      </body>
    </html>
  );
}
