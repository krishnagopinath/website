import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Main } from "./components/Main";
import stylesUrl from "./tailwind.css";
import { GTags } from "./components/GTags";

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    crossOrigin: "anonymous",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap",
  },
  { rel: "stylesheet", href: stylesUrl },
];


export const meta: MetaFunction = () => {
  const title = `krishnagopinath.me`
  const description = "The website of Krishna Gopinath, software engineer, budding teacher & amateur photographer."
  const author = "Krishna Gopinath"

  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    "og:title": title,
    "twitter:title": title,
    description,
    "og:description": description,
    "twitter:description": description,
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:creator": author,
  }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white leading-normal m-2">
        {process.env.NODE_ENV === "development" ? null : <GTags />}
        <Main>
          <Outlet />
        </Main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
