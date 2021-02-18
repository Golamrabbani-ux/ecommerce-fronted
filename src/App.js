import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import ProductsList from "./containers/ProductsList/ProductsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/action/auth.action";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import Cart from "./containers/Cart/Cart";
import { updateToCart } from "./redux/action/cart.action";


function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  useEffect(() => {
    if (!auth?.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth?.authenticate, dispatch])

  useEffect(() =>{
    dispatch(updateToCart())
  }, [dispatch])



  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/products/:slug/:productId' component={ProductDetails} />
        <Route path='/products/:slug' component={ProductsList} />
        <Route path='/cart' component={Cart} />

        <Route path='*' component={() => <h1>Not Found this page</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
