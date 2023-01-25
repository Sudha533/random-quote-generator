import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    advice:"",
  }
  componentDidMount(){
    this.fetchAdvice();
  }
  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const {advice} = response.data.slip;
      this.setState({advice});
      //console.log(advice);
      
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render(){
    const {advice} = this.state;
    return(
      <main className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className="btn" onClick={this.fetchAdvice}>Give Me Advice!</button>
        </div>
      </main>
      
    )
  }
}

export default App;
