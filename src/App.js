import logo from './logo.svg';
import './App.css';
import Visitor from './components/Visitor';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentConponent from './components/ParentConponent';
import UserGreeting from './components/UserGreeting';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      {/* <Visitor /> */}
      {/* <Counter/> */}
      {/* <Greet name="Jagdish" nikename="Jairo"/> */}

      {/* <Welcome name="Jagdish" nikename="jairo"/> */}

      {/* <FunctionalClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind /> */}

      {/* <ParentConponent /> */}

      {/* <UserGreeting/>  */}

      <PersonList />
    </div>
  );
}

export default App;
