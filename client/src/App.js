import './App.css';
import {Route, Switch} from 'react-router-dom'
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Detail from './components/detail/Detail'
import DogCreate from './components/dogcreate/DogCreate';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Landing}  />
        <Route exact path='/home' component={Home}  />
        <Route path='/home/:id' component={Detail} />
        <Route path='/create' component={DogCreate} />
      </Switch>
      
      
    </div>
  );
}

export default App;
