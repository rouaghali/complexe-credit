import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Credit from './Credit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      number:'00000000'
      ,
      name:'********'
         ,

        ref:'22/55'


     }
  }
  send1=(value)=>{
    this.setState({name:value})
  }
  send2=(value)=>{
   return this.setState({number:value})
  }
  send3=(value)=>{
    return this.setState({ref:value})
  }

  render() { 
    return ( <div>
     

      < Form   sendname={ (name)=>this.send1(name)    }  
                sendnumber={ (number)=>this.send2(number)  } 
                sendref={ (ref)=>this.send3(ref)   }           />
                <Credit name={this.state.name}
                 number={this.state.number}
                 ref={this.state.ref}/>

    </div> );
  }
}
 
export default App ;