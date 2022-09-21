import { Footer } from './components/Footer';
import { Header } from './components/Header';
import HealthCheck from './features/health-check/health-check';

/**
 * Intitialize the app component.
 * @returns A html component.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HealthCheck />
      </main>
      <Footer />
    </div>
  );
}

export default App;
