import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home/Home';
import MyOrder from './components/MyOrder/MyOrder';
import ManageOrder from './components/ManageOrder/ManageOrder';
import AddServis from './components/AddServis/AddServis';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ShowDetalse from './components/ShowDetalse/ShowDetalse';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            {/* <Route path="/myorder" exact component={MyOrder} /> */}
            <PrivateRoute exact path="/myorder">
              <MyOrder/>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorder">
              <ManageOrder/>
            </PrivateRoute>
            <Route path="/addservis" exact component={AddServis} />
            <PrivateRoute exact path="/detalse/:id">
              <ShowDetalse/>
            </PrivateRoute>

            {/* <Route path="/detalse/:id" exact component={ShowDetalse} /> */}
            <Route path="/login" exact component={Login} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
