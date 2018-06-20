import React from 'react';
 import './AddCard.css';

class AddCard extends React.Component {
  constructor() {
    super();
    this.state = {
        name: '',
        email:'',
        id:''
    }
  }



   addNewCard = (event) => {
        this.setState({
            name: event.target.value,
            email: event.target.value,
            id: event.target.value
            
        })
       
       funtionAdd() = {
           
       }
    }
    
   
  




    render(){
    return(
        <div className = 'box bg-light-green dib br3 pa3 ma2 bw2 shadow-5 tc'>
            <span>Name:</span><input type='text' value={this.state.name} placeholder='Enter Robot Name' name="name" />
        
        <span>Email:</span><input type='text' value={this.state.Email} placeholder='Enter Email' name="email" /> 
        <span>Robot Id:</span><input type='text' value={this.state.Id} placeholder='Enter Robot Id' name="id"/> 
        <button className='btn' type='submit' onClick={this.addNewCard}>Submit</button>
        
        
        </div > 
        
        
     
    
    
    );
    
    
}
}

export default AddCard;