import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Watches from './Pages/Watches/Watches/Watches';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import WatchDetails from './Pages/Watches/WatchDetails/WatchDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import OrderProducts from './Pages/OrderProducts/OrderProducts';
import Contact from './Pages/Contact/Contact';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import LoginBanner from './Pages/Login/LoginBanner/LoginBanner';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
              <Footer />
            </Route>
            <Route path="/home">
              <Home />
              <Footer />
            </Route>
            <Route path="/watches">
              <Watches />
              <Footer />
            </Route>
            <Route path="/contact">
              <Navigation />
              <Contact />
              <Footer />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Navigation />
              <LoginBanner />
              <Login />
              <Footer />
            </Route>
            <Route path="/addProducts">
              <AddProducts />
            </Route>
            <Route path="/watch/:id">
              <WatchDetails />
            </Route>
            <PrivateRoute path="/booking/:id">
              <OrderProducts />
              <Footer />
            </PrivateRoute>
            <Route path="/register">
              <Navigation />
              <Register />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
