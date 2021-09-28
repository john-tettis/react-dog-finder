import './App.css';
import React from 'react'
import duke from './Images/duke.jpg'
import whiskey from './Images/whiskey.jpg'
import perry from './Images/perry.jpg'
import tubby from './Images/tubby.jpg'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Nav from './Nav'
import DogDetail from './DogDetail'
import DogList from './DogList'

function App({dogs}) {
  return (
    <BrowserRouter>
      <Nav dogs={dogs}/>
      <Switch>
        <Route exact path='/dogs'>
          <DogList dogs={dogs}/>
        </Route>
        <Route path='/dogs/:name'>
          <DogDetail dogs={dogs}/>
        </Route>
        <Redirect to='/dogs'/>
      </Switch>
      {/* {props.dogs.map(d=><Route exact path={`/${d.name}`}><DogDetail dog={d}></DogDetail></Route>)} */}
      {/* here is a way to do it without passing the entire dogs object to the details component */}

    </BrowserRouter>
    
  );
}
App.defaultProps={
  dogs:[
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
