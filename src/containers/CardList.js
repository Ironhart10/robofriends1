import React from 'react';
import Card from './Card';
import '../components/CardList.css';


class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      mail: ''
    }
  }}
    handleSubmit = (evt) => {
    const { name, mail } = this.state;
    alert(`Submitted: ${name} with ${mail}`);
  }
  
    render() {
        const CardList = ({robots}) => {
            return (
            <div>
                {robots.map((user, i) =>{
                 return ( <Card key = {i}
                            id = {robot[i].id}
                            name = {robots[i].name}
                            email = {robots[i].email}
                            />
            );
                })
    }
        <div className = 'box bg-light-green dib  ma2 bw2 shadow-5 tc'>
            <h1>Add a Robot</h1>
            <form onSubmit>={handleSubmit}>
                <label>Name</label><input type="text" name="name" /><br /><br />
                <label>Email</label><input type="text" name="mail" />   
                <button className='btn' type='submit' value='submit'>Add Robot</button>
                </form>
                </div>
                </div>
);
    }  }  
  
    export default CardList;
  