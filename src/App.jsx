import { TrainingAccounting } from './components/TrainingAccounting/TrainingAccounting.jsx';
import { ColorConverter } from './components/ColorConverter/ColorConverter.jsx';
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <div className='divColorConverter'>
        <ColorConverter />
      </div>
      <div className='divTrainingAccounting'>
        <TrainingAccounting />
      </div>
    </div>
  );
}

