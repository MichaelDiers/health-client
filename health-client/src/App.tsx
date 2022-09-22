import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import HealthCheck from './features/health-check/health-check';

/**
 * Intitialize the app component.
 * @returns A html component.
 */
function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <div className={`app ${isLightTheme ? 'light-theme' : ''}`}>
      <Header />
      <main>
        <HealthCheck />
      </main>
      <Footer toggleLightTheme={() => setIsLightTheme(!isLightTheme)} isLightTheme={isLightTheme} />
    </div>
  );
}

export default App;
