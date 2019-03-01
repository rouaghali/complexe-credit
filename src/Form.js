import React, { Component } from 'react';



class  Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
    number:'',
     name:'',
     ref:''
     }
    }
        handelchange1=(event)=>{
            this.setState({number:event.target.value})
        
        
            this.props.sendnumber(event.target.value)
        }
+

        handelchange2=(event)=>{
            this.setState({name:event.target.value})
            this.props.sendname(event.target.value)
        }
        handelchange3=(event)=>{
            this.setState({ref:event.target.value})
            this.props.sendref(event.target.value)
        }
     
    
    
    render() { 
        
        return (  
             <div >

<input type='number'  maxLength = "16" onChange={this.handelchange1} />
{this.state.number}
<br></br>
<input type='text'  maxLength = "20" onChange={this.handelchange2} />
{this.state.name}
<br></br>
<input type='text'  maxLength = "4" onChange={this.handelchange3} />

{this.state.ref}

            </div>
        );
    }
}
 
export default Form ;