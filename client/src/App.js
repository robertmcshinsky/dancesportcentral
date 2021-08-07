import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import LeaderBoard from './pages/LeaderBoard';
import Blog from './pages/Blog';
import Competitions from './pages/Competitions';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div  div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/leaderboard" component={LeaderBoard} />
              <Route exact path="/competitions" component={Competitions} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
