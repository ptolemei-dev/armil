import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {LatticeClient, LatticeClientProvider} from '@wasmcloud/lattice-client-react/src';

const client = new LatticeClient({
  config: {
    latticeUrl: import.meta.env.VITE_NATS_WEBSOCKET_URL || 'ws://localhost:4223',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LatticeClientProvider client={client}>
      <App />
    </LatticeClientProvider>
  </React.StrictMode>,
)
