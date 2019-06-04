import React from "react";
import Slider from "react-slick";
import './carousel.css';
import Card from '../card/card.js';
class SimpleSlider extends React.Component {

  constructor(props){
    super(props);
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
      dots: true,
      infinite: true,
      speed: 600,
      autoplay:true,
      slidesToShow: (window.innerWidth>=768)?3:1,
      slidesToScroll:1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const list = this.props.data.map((item,i) => {
      return (
              <div className="Carousel-content">
              
              <Card data={item}/>  
              </div>
          );
    });

    return (
      (list.length > 3)?(<Slider {...settings}>
        {list}
      </Slider>):(<div className="less-data-div">{list}</div>)
    );
  }
}
export default SimpleSlider;