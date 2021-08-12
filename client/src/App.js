import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import LeaderBoard from "./pages/LeaderBoard";
import Blog from "./pages/Blog";
import Competitions from "./pages/Competitions";
import Studios from "./pages/Studios";
import Coaches from "./pages/Coaches";
import Shop from "./pages/Shop";
import Packing from "./pages/Packing";
import Vendors from "./pages/Vendors";
import News from "./pages/News";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <br></br>
          <div div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/leaderboard" component={LeaderBoard} />
              <Route exact path="/competitions" component={Competitions} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/studios" component={Studios} />
              <Route exact path="/coaches" component={Coaches} />
              <Route exact path="/shop" componen={Shop} />
              <Route exact path="/packing" componen={Packing} />
              <Route exact path="/vendors" componen={Vendors} />
              <Route exact path="/news" componen={News} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <br></br>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
