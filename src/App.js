import React,{Component} from 'react';
import './App.css';
import { ReactComponent as Logo } from './components/Div 1/Typography Logo/Pebble Purple.svg';
import { Container, Row, Col, Button } from 'reactstrap';
import { ReactComponent as Group18} from './components/Div 1/Group 18.svg';
import { ReactComponent as Group9} from './components/Div 1/Group 9.svg';
import { ReactComponent as Group10} from './components/Div 1/Group 10.svg';
import SimpleSlider from './Components2/carousel/carousel.js';
import social_media_campaign_CardData from './Components2/Social_Media_Campaign_Card_Details.js';
import InputRange from 'react-input-range';
import ComplexCard from './Components2/targetted_users_card/card.js';
import { ReactComponent as IconFacebook } from './components/Social Media Icons/icons8-facebook.svg';
import { ReactComponent as IconTwitter } from './components/Social Media Icons/icons8-twitter.svg';
import { ReactComponent as IconLinkedin } from './components/Social Media Icons/icons8-linkedin.svg';
import { ReactComponent as IconInstagram } from './components/Social Media Icons/icons8-instagram_new.svg';
import { ReactComponent as IconGoogle } from './components/Social Media Icons/icons8-google_logo.svg';
import TasksPerformedDiv from './Components2/tasks_performed_div/tasksDiv.js';
import GoogleAdsDiv from './Components2/google_ads_div/div.js';
import Impact from './Components2/impact_Carousel/impact.js';
import { ReactComponent as WaveArrow } from './components/Arrow/Wave Arrow.svg';


class  App extends Component {

  constructor(){
    super();
    this.state = { value: 4 };
  }

  render(){
    
    

    return (
    <div className="App">
      <div>
        <Container>
          <Row className='logo-div'>
            <Col xs='12' md='1'>
                <Logo className='logo'/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Social-media-campaign-div">
      <div className="div-1">
        <Container>
           <Row  className="social-media-report">
             <Col xs={12} >
                    <h1>Social Media Report</h1>
                    <p >
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit.Ut pretium pretium tempor. Ut eget imperdiet neque. 
                      In volutpat ante semper diam molestie, et aliquam 
                      erat laoreet.
                    </p>
                  <Button className="div-1-btn" color="primary"  ><span>July 2018 - December 2018</span></Button>
                      
                     
                    
             </Col>
           </Row>
        </Container>

        <div className="div-1-image">
           <Group9 id="group9-image"/>
           <Group18 id="group18-image"/>
           <Group10 id="group10-image"/>
        </div>

      </div>
      
      <Container>
        <Row >
          <Col xs={12} className="div-2" >
            <div className="div-2-heading">
              <span>Why was a Social Media Campaign needed for ESTA ?</span>
          </div>
          </Col>
        </Row>
      </Container>
      <div className="Social-media-campaign-carousel">
        <SimpleSlider data={social_media_campaign_CardData.slice(0,this.state.value)}/>
      <div className="input-slider">
        <h3>Choose the number of cards in the above section</h3>
        <InputRange
        maxValue={6}
        minValue={1}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
      </div>

      </div>
      <div >
        <Container className='targetted-users-div'>
          <Row className='targetted-users-div-row'>
            <Col xs={12} md={6}  className="targetted-users-div-card">
               
            </Col>
            <Col xs={12} md={6}>
            <div className="platforms-div">
               <h4 className="platforms-heading">
                Platforms we used and why ?
              </h4>
              <p className="platforms-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut pretium 
                pretium tempor. Ut eget imperdiet neque.
              </p>
              <ul className="platforms-list" style={{"list-style-type":"none"}}>
                <li>
                  <span>
                    
                      <IconFacebook className="social-media-icon"/>
                    
                     <p>Facebook</p>
                  </span>
                </li>
                <li>
                  <span>
                    
                      <IconTwitter className="social-media-icon"/>
                    
                     <p>Twitter</p>
                  </span>
                </li>
                <li>
                  <span>
                    
                      <IconLinkedin className="social-media-icon"/>
                    
                     <p>Linkedin</p>
                  </span>
                </li>
                <li>
                  <span>
                    
                      <IconInstagram className="social-media-icon"/>
                    
                     <p>Instagram</p>
                  </span>
                </li>
                <li>
                  <span>
                    
                      <IconGoogle className="social-media-icon"/>
                    
                     <p>Google Ads</p>
                  </span>
                </li>
              </ul>
            </div>
              
            </Col>
          </Row>
        </Container>
      </div>
        
      </div>
      
      <TasksPerformedDiv/>
      <GoogleAdsDiv/>
      
      <div className="social-media-impact">
        <Impact/>
      </div>
      <div className="last-div">

        <Container>
          <Row>
            <Col xs={12}>
              <h5>Major Impact for European String 
              Teachers Association(ESTA)</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3>% increase in</h3>
            </Col>
          </Row>
          <Row className="last-div-stats">
            <Col xs={12} md={2}>
              <h1>800</h1>
               <p>Reach</p>
            </Col>
            <Col xs={12} md={2}>
              <h1>530</h1>
               <p>Impressions</p>
            </Col>
            <Col xs={12} md={2}>
              <h1>420</h1>
               <p>Likes</p>
            </Col>
            <Col xs={12} md={2}>
              <h1>360</h1>
               <p>Followers</p>
            </Col>
            <Col xs={12} md={2}>
              <h1>248</h1>
               <p>Members</p>
            </Col>
            <Col xs={12} md={2}>
              <h1>220</h1>
               <p>Click Rate</p>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
  }
  
}

export default App;
