import { TrainingAccounting } from "./components/TrainingAccounting/TrainingAccounting";
import { ColorConverter } from "./components/ColorConverter/ColorConverter";
// import { Feedback } from "./components/Feedback";
// import { FeedbackForm } from './components/FeedbackForm'
// import { FileChooser } from './components/FileChooser'
// import { FileChooserAdv } from './components/FileChooserAdv'
// import { RefExample } from "./components/RefExample";
// import { BooksStore } from "./components/BooksStore";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="ColorConverter">
        <ColorConverter />
      </div>

      <div className="TrainingAccounting">
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
