import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import SearchPage from "./components/SearchPage";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Route path="/">
            <Modal />
          </Route>
          <Footer />
      </Router>

      {/* 
      Home Page
        Header
          Search
        Card
        Footer
        Search Page
          Header
      */}
    </div>
  );
};

export default App;
