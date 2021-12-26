import React, { Component } from "react";
import Landing from "./Components/LandingPage/Landing";
import SignIn from "./Components/SignIn/signin";
import SignUp from "./Components/SignUp/signup";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/docs/About";
import ForgotPassword from "./Components/ForgotPassword/ForgotPass";
import Contact from "./Components/Contact/Contact";
import AskQuestion from "./Components/Question/AskQuestion";
import Account from "./Components/Account/Account";
import AllQuestions from "./Components/AllQuestions/AllQuestions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import fire from "./config/firebase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={this.state.user ? HomePage : Landing}
            />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/askquestion" component={AskQuestion} />
            <Route path="/profile" component={Account} />
            <Route path="/allquestions" component={AllQuestions} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
