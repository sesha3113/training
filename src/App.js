import "./App.css";
import Helloworld from "./Pages/helloworld/helloworld";
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
          <Routing />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
