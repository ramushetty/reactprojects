import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';
import Counter from './Counter';
import UserFetcher from './UserFetcher';


function App() {
  return (
    <div className="App">
      <Greeting name="NPCI"/>
      <Counter/>
      <UserFetcher userId={1}/>
     
    </div>
  );
}

export default App;
