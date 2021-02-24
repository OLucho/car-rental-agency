import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CarsPage from '../pages/cars';
import Main from '../pages/main';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cars" component={CarsPage} />
          {/* <Route exact path="/clients" component={Client} /> 
           <Route exact path="/reservations" component={Reservation} /> */}
        </Switch>
      </Router>
    </>
  );
}
