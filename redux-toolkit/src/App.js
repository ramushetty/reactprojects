import logo from './logo.svg';
import './App.css';
import Users from './features/users/Users';
import Cake from './features/cake/Cake';
import Icecream from './features/icecream/Icecream';

function App() {
  return (
    <div className="App">
      <Cake/>
      <Icecream/>
      <Users/>
    </div>
  );
}

export default App;
