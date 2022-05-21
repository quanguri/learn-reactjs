import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import AlbumFeature from './features/Album';
import ChangeColor from './features/ChangeColor';
// import './App.css';
import TodoFeature from './features/Todo';
function App() {
  return (
    <div className="App">
      <p><Link to="/">Home</Link></p>
     <p> <Link to="/todos" >Todo</Link></p>
     <p> <Link to="/albums" >Albums</Link></p>
      <Switch>
      <Route path="/" component={ChangeColor}/>
      <Route path="/todos" component={TodoFeature}/>
      <Route path="/albums" component={AlbumFeature}/>
      </Switch>
      
    </div>
  );
}

export default App;
