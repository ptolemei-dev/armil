import {useLatticeData} from '@wasmcloud/lattice-client-react/src';

function Dashboard() {
  const { hosts } = useLatticeData();
  const hostsArray = Object.values(hosts).sort((a, b) => (a.id > b.id ? 1 : -1));
  return (
    <>
    <div>
      <h1>Hosts</h1>
      <ul>
        {hostsArray.map((host) => (
          <li key={host.id}>
            {host.id} - {host.friendly_name}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Dashboard;