import './App.css';
import HealthCheck from './features/health-check/health-check';

/**
 * Intitialize the app component.
 * @returns A html component.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <HealthCheck />
      </main>
    </div>
  );
}

export default App;
