
import './App.css';
import Profile from './Components/Profile/Profile.js'
import badr from './badr.jpg'

function App() {

  return (
    
      <div className="container">
        <div className="row">
          <div className="col">
            <Profile fullName={"badr"} bio={"Hello my name is badr"} Profession={"developer"}>{badr}</Profile>
          </div>
        </div>
      </div>
  );
}

export default App;
