import React from 'react';
import './tasksDiv.css';
import { Container,Row,Col } from 'reactstrap';
import { ReactComponent as Pic1 } from '../../components/Task Performed/icons8-neutral_trading.svg';
import { ReactComponent as Pic2 } from '../../components/Task Performed/icons8-design.svg';
import { ReactComponent as Pic3 } from '../../components/Task Performed/icons8-to_do.svg';
import { ReactComponent as Pic4 } from '../../components/Task Performed/icons8-terms_and_conditions.svg';
import { ReactComponent as Pic5 } from '../../components/Task Performed/Path.svg';
import { ReactComponent as Pic6 } from '../../components/Task Performed/icons8-search_bar.svg';



const TasksPerformedDiv = (props) => {

	return (
		      <div className="tasks-performed-div">
		          <Container>
		          	<Row>
		          		<Col xs={12} >
		          			<h3 className="task-heading">Tasks Performed</h3>
		          			<p className="task-text">
		          				Lorem ipsum dolor sit amet, 
		          				consectetur adipiscing elit. 
		          				Ut pretium pretium tempor. Ut 
		          				eget imperdiet neque.

		          			</p>
		          		</Col>
		          	</Row>
		          	<Row className='tasks-card-row' >
		          		<Col xs={6} md={2}>
		          			<div className='tasks-card'>
		          				<Pic1 className='task-card-img'/>
		          				<h5>Social Media Consistency</h5>
		          			</div>
		          		</Col>
		          		<Col xs={6} md={2}>
		          			<div className='tasks-card'>
		          				<Pic2 className='task-card-img'/>
		          				<h5>Graphic & Media Design</h5>
		          			</div>
		          		</Col>
		          		<Col xs={6} md={2}>
		          			<div className='tasks-card'>
		          				<Pic3 className='task-card-img'/>
		          				<h5>Selling Customer Memebership</h5>
		          			</div>
		          		</Col>
		          		<Col xs={6} md={2}>
		          			<div className='tasks-card'>
		          				<Pic4 className='task-card-img'/>
		          				<h5>Content Marketing & Optimisation</h5>
		          			</div>
		          		</Col>
		          		<Col xs={6} md={2}>
		          			<div className='tasks-card'>
		          				<Pic5 className='task-card-img'/>
		          				<h5>Managing & creating Google Ads</h5>
		          			</div>
		          		</Col>
		          		<Col xs={6} md={2}>
		          			<div className='tasks-card'>
		          				<Pic6 className='task-card-img' id="seo"/>
		          				<h5>Search Engine Optimization</h5>
		          			</div>
		          		</Col>
		          	</Row>
		          </Container>
		      </div>

		);
}

export default TasksPerformedDiv;
