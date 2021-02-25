import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CarsPage from '../pages/cars';
import Main from '../pages/main';
import DetailPage from '../pages/detailPage';
export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cars" component={CarsPage} />
          <Route exact path="/:type/:id" component={DetailPage} />
        </Switch>
      </Router>
    </>
  );
}
