import React, { Component } from "react";
import Slider from "react-slick";
import './impact.css';
import { Container,Row,Col } from 'reactstrap';

import { ReactComponent as IconFacebook } from '../../components/Social Media Icons/icons8-facebook.svg';
import { ReactComponent as IconTwitter } from '../../components/Social Media Icons/icons8-twitter.svg';
import { ReactComponent as IconLinkedin } from '../../components/Social Media Icons/icons8-linkedin.svg';
import { ReactComponent as IconInstagram } from '../../components/Social Media Icons/icons8-instagram_new.svg';
import { ReactComponent as IconGoogle } from '../../components/Social Media Icons/icons8-google_logo.svg';

export default class Impact extends Component {

  constructor(){
    super();
    this.state={
        slideIndex: 0,
    }
  }




  render() {

     function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display:"block",  background: "#0074e4","border-radius":"50%",
      "width":"25px",height:"25px",padding:"2px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
    style={{ ...style, display:"block", background: "#0074e4","border-radius":"50%",
      "width":"25px",height:"25px",padding:"2px"}}
      onClick={onClick}
    />
  );
}

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

    };
    return (
      <div >
        
        <Slider ref={slider => (this.slider = slider)} {...settings} className="impact-div"  >
          <div className="impact-carousel-div">
              <Container>
                <Row>
                  <Col xs={12} md={5}>
                    <div className="impact-content">
                      <h4 className="impact-content-title">
                        Facebook Impact
                      </h4>
                      <p className="impact-content-text">
                        650 people are reached with each post on an average <br/><br/>About 11 people respond to
                         each post in the form of Likes, Shares and Comments.
                      </p>

                    </div>
                  </Col>
                  <Col xs={12} md={7}>
                      <div className="circle2-card ">
                      <div className="square2-card1 shadow">
                        
                      </div>
                      <div className="square2-card2 shadow">
                          <Container>
                            <Row>
                              <Col xs={12}>
                                <h3>88.2 K</h3>
                                <p>reach</p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={6}>
                                <p>shares</p>
                                <h5>2.2 K</h5>
                              </Col>
                              <Col xs={6}>
                                <p>likes</p>
                                <h5>1.6 K</h5>
                              </Col>
                            </Row>
                          </Container>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
          <div className="impact-carousel-div">
            <Container>
                <Row>
                  <Col xs={12} md={5}>
                    <div className="impact-content">
                      <h4 className="impact-content-title">
                        Twitter Impact
                      </h4>
                      <p className="impact-content-text">
                        650 people are reached with each post on an average <br/><br/>About 11 people respond to
                         each post in the form of Likes, Shares and Comments.
                      </p>

                    </div>
                  </Col>
                  <Col xs={12} md={7}>
                      <div className="circle2-card ">
                      <div className="square2-card1 shadow">
                        
                      </div>
                      <div className="square2-card2 shadow">
                          <Container>
                            <Row>
                              <Col xs={12}>
                                <h3>70.5 K</h3>
                                <p>reach</p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={6}>
                                <p>shares</p>
                                <h5>4.2 K</h5>
                              </Col>
                              <Col xs={6}>
                                <p>likes</p>
                                <h5>10.8 K</h5>
                              </Col>
                            </Row>
                          </Container>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
          <div className="impact-carousel-div">
            <Container>
                <Row>
                  <Col xs={12} md={5}>
                    <div className="impact-content">
                      <h4 className="impact-content-title">
                        Linkedin Impact
                      </h4>
                      <p className="impact-content-text">
                        650 people are reached with each post on an average <br/><br/>About 11 people respond to
                         each post in the form of Likes, Shares and Comments.
                      </p>

                    </div>
                  </Col>
                  <Col xs={12} md={7}>
                      <div className="circle2-card ">
                      <div className="square2-card1 shadow">
                        
                      </div>
                      <div className="square2-card2 shadow">
                          <Container>
                            <Row>
                              <Col xs={12}>
                                <h3>15 K</h3>
                                <p>reach</p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={6}>
                                <p>shares</p>
                                <h5>2.4 K</h5>
                              </Col>
                              <Col xs={6}>
                                <p>likes</p>
                                <h5>7.8 K</h5>
                              </Col>
                            </Row>
                          </Container>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
          <div className="impact-carousel-div" >
            <Container>
                <Row>
                  <Col xs={12} md={5}>
                    <div className="impact-content">
                      <h4 className="impact-content-title">
                        Instagram Impact
                      </h4>
                      <p className="impact-content-text">
                        650 people are reached with each post on an average <br/><br/>About 11 people respond to
                         each post in the form of Likes, Shares and Comments.
                      </p>

                    </div>
                  </Col>
                  <Col xs={12} md={7}>
                      <div className="circle2-card ">
                      <div className="square2-card1 shadow">
                        
                      </div>
                      <div className="square2-card2 shadow">
                          <Container>
                            <Row>
                              <Col xs={12}>
                                <h3>50.3 K</h3>
                                <p>reach</p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={6}>
                                <p>shares</p>
                                <h5>14.2 K</h5>
                              </Col>
                              <Col xs={6}>
                                <p>likes</p>
                                <h5>20.1 K</h5>
                              </Col>
                            </Row>
                          </Container>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
          <div className="impact-carousel-div">
            <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <div className="impact-content">
                      <h4 className="impact-content-title">
                        Google Ads Impact
                      </h4>
                      <p className="impact-content-text">
                        650 people are reached with each post on an average <br/><br/>About 11 people respond to
                         each post in the form of Likes, Shares and Comments.
                      </p>

                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                      <div className="circle2-card ">
                      <div className="square2-card1 shadow">
                        
                      </div>
                      <div className="square2-card2 shadow">
                          <Container>
                            <Row>
                              <Col xs={12}>
                                <h3>90.3 K</h3>
                                <p>reach</p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={6}>
                                <p>shares</p>
                                <h5>20.4 K</h5>
                              </Col>
                              <Col xs={6}>
                                <p>likes</p>
                                <h5>36.9 K</h5>
                              </Col>
                            </Row>
                          </Container>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
          
        </Slider>

        <div className="impact-control-div">
              <span onClick={e => this.slider.slickGoTo(0)} className="impact-control" style={{opacity:(this.state.slideIndex === 0)?"1":"0.27"}}>
                    <IconFacebook className="social-media-icon"/>
                    <p>Facebook</p>
              </span>
              <span onClick={e => this.slider.slickGoTo(1)} className="impact-control" style={{opacity:(this.state.slideIndex === 1)?"1":"0.27"}}>
                    <IconTwitter className="social-media-icon"/>
                    <p>Twitter</p>
              </span>
               <span onClick={e => this.slider.slickGoTo(2)} className="impact-control" style={{opacity:(this.state.slideIndex === 2)?"1":"0.27"}}>
                    <IconLinkedin className="social-media-icon"/>
                    <p>Linkedin</p>
              </span>
               <span onClick={e => this.slider.slickGoTo(3)} className="impact-control" style={{opacity:(this.state.slideIndex === 3)?"1":"0.27"}}>
                    <IconInstagram className="social-media-icon"/>
                    <p>Instagram</p>
              </span>
               <span onClick={e => this.slider.slickGoTo(4)} className="impact-control" style={{opacity:(this.state.slideIndex === 4)?"1":"0.27"}}>
                    <IconGoogle className="social-media-icon" />
                    <p>Google Ads</p>
              </span>

        </div>
      </div>

    );
  }
}