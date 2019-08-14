 import React, { Component } from 'react';
 import './App.css';
 import axios from 'axios';


 class App extends Component{

  constructor(){
    super()

    this.state = {
      name:"",
      age:"",
      loading:false,
      message:""
    }
  }

  dataChange(e){
      this.setState({
        [e.target.name] : e.target.value
      })
  }

  postData(e){
      e.preventDefault()

      const name = this.state.name;
      const age = this.state.age;

      this.setState({
        loading: true
      })
      const data = {
        name,
        age
      }

      axios.post(' /t/ekltk-1565725761/post', data)
      .then(response => {
        console.log(response);
          this.setState({
            loading: false,
            message: response.data
          })
      })
      .catch(err => {
        console.log(err);
          this.setState({
            loading: false
          })
      })
  }

  loadOrShow(){
    if(this.state.loading){
      return<p>Loading...</p>
    }else{
      return <p>{this.state.message}</p>
    }
  }


   render(){
     return(
        <div className="App">
          <header className="App-header">
              <h1>JS</h1>
          </header>

          <form onSubmit = {this.postData.bind(this)}>
            <input type="text" name="name" value={this.state.name} onChange = {this.dataChange.bind(this)} />
            <input type="text" name="age" value={this.state.age} onChange = {this.dataChange.bind(this)} />
            <input type="submit" />
          </form>
        </div>
     );
   }
 }

 export default App;