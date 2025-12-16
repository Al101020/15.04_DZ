import { TrainingAccounting } from './components/TrainingAccounting/TrainingAccounting';
import { ColorConverter } from './components/ColorConverter/ColorConverter';
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

