import React from 'react';
import './div.css';
import { Container,Row,Col } from 'reactstrap';
import { ReactComponent as Pic1 } from '../../components/Google Ads Journey/guarantee.svg';
import { ReactComponent as Pic2 } from '../../components/Google Ads Journey/market-analysis.svg';
import { ReactComponent as Pic3 } from '../../components/Google Ads Journey/idea.svg';




const GoogleAdsDiv = (props) => {

	return (
		      <div className="google-ads-div">
		          <Container>
		          	<Row>
		          		<Col xs={12}>
		          			<h3 className="goole-ads-heading">
		          				ESTA’s Google Ads Journey
		          			</h3>
		          			<p className="google-ads-text">
		          				The growth across various platforms has been steady and 
		          				consistent with user appreciation 
		          				growing by the increased number of posts.
		          			</p>
		          		</Col>
		          	</Row>
		          	<Row className="google-ads-card-row">
		          		<Col xs={12} md={4}>
		          			<div className="google-ads-card">
		          				<div className="google-ads-card-img"><Pic1 className="google-ads-card-imgage"/></div>
		          				<h5>Market Research and Strategising</h5>
		          				<p>The first few weeks were focused planning the campaigns which were to be made content specific. We had to work on the Keywords suggested by Phil and Steve with a Goal to increase the memberships.
		          				</p>
		          			</div>
		          		</Col>
		          		<Col xs={12} md={4}>
		          			<div className="google-ads-card">
		          				<div className="google-ads-card-img"><Pic3 className="google-ads-card-imgage"/></div>
		          				<h5>Google Ads Campaign</h5>
		          				<p>After studying and researching about ESTA and its goals we needed to create our campaigns, the initial phase was tough than anticipated yet we achieved and are performing much better than competitors
		          				</p>
		          			</div>
		          		</Col>
		          		<Col xs={12} md={4}>
		          			<div className="google-ads-card">
		          				<div className="google-ads-card-img"><Pic2 className="google-ads-card-imgage"/></div>
		          				<h5>Device Based User Analytics</h5>
		          				<p>From our campaigns, we grew users across the given 
		          				platforms and gained the maximum force towards marketing to induce the maximum traffic. 
		          				Making a hughe impact on the main user base.
		          				</p>
		          			</div>

		          		</Col>
		          	</Row>
		          </Container>
		      </div>

		);
}

export default GoogleAdsDiv;
