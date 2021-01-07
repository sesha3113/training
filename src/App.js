import "./App.css";
import Helloworld from "./Pages/helloworld/helloworld";
import Routes from "./Routes/index";
import {BrowserRouter,Route,Switch} from 'react-router-dom'

const Routing = () => {
  return(
    <Switch>
          <Route exact path ='/'>
            <Helloworld/> 
          </Route>
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
