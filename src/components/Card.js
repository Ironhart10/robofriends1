 import React from 'react';
 import './Card.css'

 const Card = (props) => {
     const {
         name,
         email,
         
     } = props;
     return ( <
         div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc' >
         <
         img className = 'image1'
         alt = 'robots'
         src = {
             `https://robohash.org/${props.id}`
         }
         /> <
         div >
         <
         h2 > {
             name
         } < /h2> <
         p > {
             email
         } < /p> < /
         div > <
         /div>
     );
 }

 export default Card;
