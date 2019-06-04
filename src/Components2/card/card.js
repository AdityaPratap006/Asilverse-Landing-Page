import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './card.css';
const CampaignCard = (props) => {
  return (
    <div>
      <Card className="shadow">
        <CardBody>
          <CardTitle className="card-tile">{props.data.title}</CardTitle>
          <CardText className="card-text">{props.data.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CampaignCard;