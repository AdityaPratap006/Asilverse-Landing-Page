import React from 'react';
import './card.css';
import { Container,Row,Col } from 'reactstrap';


const ComplexCard = (props) => {
  return(

  		<div className="circle-card ">
  			<div className="square-card1 shadow">
  				
  			</div>
  			<div className="square-card2 shadow">
  					<Container>
  						<Row>
  							<Col xs={12}>
  								<h3>13.4 billion</h3>
  								<p>Targetted users</p>
  							</Col>
  						</Row>
  						<Row>
  							<Col xs={6}>
  								<p>Affected</p>
  								<h5>4.2 billion</h5>
  							</Col>
  							<Col xs={6}>
  								<p>influenced</p>
  								<h5>1.6 billion</h5>
  							</Col>
  						</Row>
  					</Container>
  			</div>
  		</div>
	);
};

export default ComplexCard;