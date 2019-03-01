import React, { Component } from 'react';

import './App.css';



class Credit extends Component {
  state={

  }
  testname=(c)=>{
  return (c.toUpperCase())
  


  
}



  render() { 

    const {name,number,ref}=this.props
    return (
<div className="credit-card">
    <h1 className="credit-card-title">CREDIT CARD</h1>
    <div className="chip" />
    <div className="content">
      <div className="text">
          <h2 className="card-number">
          {this.num(number)}
          </h2>
          <h2 className=".validation">
          {this.testname(name)}
          </h2>
          <h2 className="credit-holder">
           12/5
          </h2>
      </div>
     
    </div>
  </div>

         );
        
    }
}
export default  Credit ;