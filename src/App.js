import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails/BlogDetails';
import NotFound from './components/NotFound/NotFound'
import Clients from './components/Clients/Clients';
import ClientDetails from './components/ClientDetails/ClientDetails'

function App() {
  // const likes = 50;
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/clients">
              <Clients />
            </Route>
            <Route path="/clients/:id">
              <ClientDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/*<p>{`Liked ${likes} times`}</p>*/}
          {/*<p>Liked {likes} times</p>*/}
        </div>
      </div>
    </Router>
  );
}

export default App;
