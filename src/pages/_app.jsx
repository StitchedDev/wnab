import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }) {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <Nav />
      <Component {...pageProps} />
    </UserProvider>
  );
}
