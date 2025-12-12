import { TrainingAccounting } from "./components/TrainingAccounting/TrainingAccounting";
import { ColorConverter } from "./components/ColorConverter/ColorConverter";
// import { Feedback } from "./components_/Feedback";
// import { FeedbackForm } from './components_/FeedbackForm'
// import { FileChooser } from './components_/FileChooser'
// import { FileChooserAdv } from './components_/FileChooserAdv'
// import { RefExample } from "./components_/RefExample";
// import { BooksStore } from "./components_/BooksStore";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="divColorConverter">
        <ColorConverter />
      </div>

      <div className="divTrainingAccounting">
        <TrainingAccounting />
      </div>

      {/* <div className="RefExample">
        <Feedback />
      </div>
      
      <div className="FeedbackForm">
        <FeedbackForm />
      </div>
      
      <div className="FileChooser">
        <FileChooser />
      </div>
      
      <div className="FileChooserAdv">
        <FileChooserAdv />
      </div>
      
      <div className="RefExample">
        <RefExample />
      </div>
      <div className="BooksStore">
        <BooksStore />
      </div> */}
    </div>
  );
}
