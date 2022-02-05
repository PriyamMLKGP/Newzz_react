import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About';
import Footer from './Components/Footer';

// taking data frm env.local is to get secure data

export default class App extends Component {
  state={
    progress:0
  }
  // I havent used below but i can use to make use of env variable, i also need to reload before
  apikey=process.env.REACT_APP_NEWS_API;
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return <div>
      <Router><Navbar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        //onLoaderFinished={() => this.setProgress(this.state.progress)}
      />
        <Switch>
          <Route exact path="/">
            {/* when we are just using teh basic coding we also need to mount the componenet  */}
            <News setstate={this.setProgress} key="general" pagesize="9" country="us" category="general" />
          </Route>
          <Route exact path="/about">
            <About key="general1" />
          </Route>
          <Route exact path="/buisness">
            <News setstate={this.setProgress} key="business" pagesize="9" country="us" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News setstate={this.setProgress} key="entertainment" pagesize="9" country="us" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News setstate={this.setProgress} key="health" pagesize="9" country="us" category="health" />
          </Route>
          <Route exact path="/science">
            <News setstate={this.setProgress} key="science" pagesize="9" country="us" category="science" />
          </Route>
          <Route exact path="/sports">
            <News setstate={this.setProgress} key="sports" pagesize="9" country="us" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setstate={this.setProgress} key="technology" pagesize="9" country="us" category="Technology" />
          </Route>
        </Switch>
        <Footer />
      </Router>


    </div>;
  }
}
