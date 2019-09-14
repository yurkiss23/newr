import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { url } from 'inspector';

class App extends React.Component {
  state = {
      dogs: []
    }

  getListDataHandler=(e)=>{
    e.preventDefault();
    // var list=[
    //   {id:1, name:"шарік",image:''},
    //   {id:2,name:"тузік",image:''}
    // ];
    //this.setState({dogs:list});

    const url='https://localhost:44325/api/dogs';
    axios.get(url).then(
      (resp) => { console.log('-----axios res-----', resp);
      this.setState({dogs:resp.data});
    }
    );
    console.log("---click button---");
  }
  render() {
    console.log("--render app state--", this.state) ;

    const todoItems = this.state.dogs.map((dog) =>
      <li key={dog.id}>
        {dog.name}
      </li>
    );

    return (
      <div className="container">
        <h1>Hello</h1>
        <button onClick={this.getListDataHandler}>get data</button>
        <ul>
          {todoItems}
        </ul>
      </div>
      );
  }
}
 
export default App;
