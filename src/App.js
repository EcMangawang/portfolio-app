import './App.css';
import Header from './Header.js';
import WorkExperience from './workExperience.js';
import Education from './Education.js';
import TechnologySummary from './technologySummary.js';

function App() {
  return (
    <div className="App">
        <Header />

    <main className="container">
        <div className="row mt-3">
            <WorkExperience />
            <Education />
        </div>
        <div className="row mt-3">
            <TechnologySummary />
        </div>
    </main>
    
    </div>
  );
}

export default App;
