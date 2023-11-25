import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import Greeting from './Greeting';
import Counter from './Counter';
import UserFetcher from './ UserFetcher';

function App() {
  return (
    <div className="App">

      <Greeting name="Alice" />
      <Counter />
      <UserFetcher userId={1} />
      
    </div>
  );
}

export default App;
