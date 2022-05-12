import StopWatch from './stopWatch';
import { createRoot } from 'react-dom/client';
import './App.css';

function App() {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <div className="App">
      <StopWatch />
    </div>,
  );
}

export default App;
