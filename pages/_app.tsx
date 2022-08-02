import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack';
import aws from 'aws-sdk'



function MyApp({ Component, pageProps }: AppProps) {

  aws.config.update({
    accessKeyId: process.env.NEXT_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_ACCESS_KEY_ID,
    region: process.env.NEXT_ACCESS_REGION,
    signatureVersion: 'v4',
  })

  return (
    <SnackbarProvider maxSnack={3}>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default MyApp
