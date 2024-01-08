import './App.css';

import InfoDiv from './components/info/InfoDiv';
import MapComponent from './components/map/MapComponent';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <MapComponent />
      <div>
        <InfoDiv />
      </div>
    </div>
  );
}

export default App;
