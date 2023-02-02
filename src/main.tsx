import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chakra Play - An interactive playground for Chakra UI</title>
          <link rel="icon" type="image/png" href="https://chakra-ui.com/favicon.png" sizes="32x32" />
          <meta name="description" content="Experience the full capabilities of Chakra UI with Chakra Play. An interactive sandbox where you can try out and explore the components of Chakra UI." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content="https://play.chakra-ui.com" />
          <meta property="og:title" content="Chakra Play" />
          <meta property="og:description" content="Experience the full capabilities of Chakra UI with Chakra Play. An interactive sandbox where you can try out and explore the components of Chakra UI." />
          <meta property="og:site_name" content="Chakra Play: Experience the full capabilities of Chakra UI with Chakra Play. An interactive sandbox where you can try out and explore the components of Chakra UI." />
          <meta property="og:image" content="https://chakra-ui.com/og-image.png" />
          <meta property="og:image:width" content="1240" />
          <meta property="og:image:height" content="480" />
          <meta property="og:image:alt" content="Chakra Play: Experience the full capabilities of Chakra UI with Chakra Play. An interactive sandbox where you can try out and explore the components of Chakra UI." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@chakra-ui" />
          <meta name="twitter:handle" content="@chakra-ui" />
          <meta name="twitter:image" content="https://chakra-ui.com/twitter-og-image.png" />
          <meta name="twitter:image:alt" content="Chakra Play: Experience the full capabilities of Chakra UI with Chakra Play. An interactive sandbox where you can try out and explore the components of Chakra UI." />
        </Helmet>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
