import React, { Component } from 'react';
import './App.css';

function UserTitle(props){
  return (
      <div>
          <h1>{props.title}</h1>
      </div>

  ) 
}
function ListUser(props){
  return <li>{props.user}</li>
}
function UserList(props){
  return (
      <div>
          <ul type="none">
              <ListUser user = {props.Users[0]}/>
              <ListUser user = {props.Users[1]}/>
              <ListUser user = {props.Users[2]}/>
              <ListUser user = {props.Users[3]}/>
              <ListUser user = {props.Users[4]}/>
          </ul>
      </div>
  )
}
function UserApp(props){
  return (
      <div style={{textAlign: "center",fontWeight: 'bold', fontSize: 14}}>
          <UserTitle title = "UserList"/>
          <UserList Users = {[["Name :","Sachin"," - Age - ", 10],["Name :","Som"," - Age - ", 20],["Name :","Suraj"," - Age - "],["Name :","Saurav"," - Age - "],["Name :","Rohan"," - Age - "]]}/>
      </div>
  )
}
var userApp = <UserApp/>;
class App extends Component {
  render() {
    return(
      <div>
        {userApp}
        </div> 
    );
  }
}
export default App;