import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  const appID = process.env.NEXT_PUBLIC_APP_ID;
  const serverurl = process.env.NEXT_PUBLIC_SERVER_URL;
  return (
    <MoralisProvider 
    appId={appID} 
    serverUrl={serverurl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
 
}

export default MyApp
