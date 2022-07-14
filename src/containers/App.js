import React, { Component } from "react";
import SearchBox from "../components/SearchBox"
import CardList from "../components/CardList";
import "./App.css"
import Scroll from "../components/Scroll"

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchField:""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{return  response.json();})
        .then(users =>{
        this.setState({robots:users})            
        })
    }

    onSreachChange =(event) =>{
        this.setState({searchField:event.target.value})
    }

    render(){
        const {robots,searchField}= this.state;

            const filteredRobots =robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })

        if(!robots.length){
            return <h2 className="tc f1 light-green">Loading...</h2>
        }else{
            return(
        <div className="tc">
        <h2 className="f1 light-green">Robo Friends</h2>
         <SearchBox searchChange={this.onSreachChange}/>
         <Scroll>
         <CardList robots={filteredRobots}/>
         </Scroll>
        </div>
        
    )}}
}

export default App;