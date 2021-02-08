import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import ProductsList from "./containers/ProductsList/ProductsList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/products/:slug' component={ProductsList} />

        <Route path='*' component={()=> <h1>Not Found this page</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
