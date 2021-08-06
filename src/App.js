
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto'
import FullName from './Components/Profile/FullName'
import Address from './Components/Profile/Address'
import background from './background.jpg'

function App() {
  
  return (
    <div className="container">
  <div className="row">
    <div className="col">
      <ProfilePhoto />
    </div>
    <div className="col">
      <FullName />
    </div>
    <div className="col">
      < Address />
    </div>
  </div>
</div>
  );
}

export default App;
