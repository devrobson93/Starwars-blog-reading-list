import React from "react"
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import CardPeopleComponent from "./card-people";

function SliderPeopleComponent(prop){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ],
        };

        
    return(
        <div className="slider">
        <Slider {...settings}>
        {prop.obj.map((item,i)=>{
                return(
                    <div key ={i}>
                        <CardPeopleComponent img={prop.img} obj={item} index={i+1}/>
                    </div>
                )
            })
        }
        </Slider>
      </div>
    )
    /**
     *         {prop.obj.map((item,i)=>{
                return(
                    <div>
                        <CardComponent img={prop.img}/>
                    </div>
                )
            })
        }
     */
};


/*
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}onClick={onClick}
      >
        <ArrowForwardIos style={{color: 'blue', fontSize: '30px'}}/>
      </div>
    );
  }
  
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} onClick={onClick}
      >
        <ArrowBackIos style={{color: 'blue', fontSize: '30px'}}/>
      </div>
    );
  }
*/

export default SliderPeopleComponent;