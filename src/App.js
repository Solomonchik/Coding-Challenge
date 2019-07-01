import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TopNavigation from './UI/navigation/TopNavigation'
import PostDetail from './components/PostDetail'
import PostPage from "./components/PostPage";
import HomePage from "./components/HomePage";
import Footer from "./UI/navigation/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
          <div className="contentAppContainer">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/posts" component={PostPage}/>
              <Route path="/posts/:userId" component={PostDetail}/>
            </Switch>
          </div>
       <Footer/>
      </div>
    );
  }
}

export default App;