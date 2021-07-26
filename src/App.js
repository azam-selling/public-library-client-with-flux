import "./App.css";
import React from "react";
import Header from "./common/Header";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import UpcomingBooks from "./components/UpcomingBooks";
import NotFoundPage from "./components/NotFoundPage";
import ManageBookPage from "./components/ManageBookPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/upcomingbooks" component={UpcomingBooks} />
        <Route path="/books/:bookId" component={ManageBookPage} />
        <Route path="/book" component={ManageBookPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
