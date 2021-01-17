import React from "react";
import Card from 'react-bootstrap/Card'


function RenderCard(props){
  return(
  <Card style={{ width: '30rem' }}>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
);
}


const Facts = () => {
    return(
        <div>
        <center>
        <br/>    
        <RenderCard title="1 ton paper == 322 gallons petrol"/><br/>
        <RenderCard title="csdfc"/> <br/>
        <RenderCard title="sdfsd"/><br/>
        </center>    
        </div>        
    )
}

export default Facts;