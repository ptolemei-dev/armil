
import {LatticeClient, LatticeClientProvider} from '@wasmcloud/lattice-client-react/src';
import Dashboard from './Dashboard';

const client = new LatticeClient({
  config: {
    latticeUrl: import.meta.env.VITE_NATS_WEBSOCKET_URL || 'ws://localhost:4223',
  },
});

function App() {
  return (
    <LatticeClientProvider client={client}>
      <Dashboard />
    </LatticeClientProvider>
  );
}

export default App;
