import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Banner.css"; 
import Fade from 'react-reveal/Fade';
const Banner = () => {


    const carouselCaptionStyle = {
    top:'70px',
    left: '100px',
    color: '#fff',
    textAlign: 'left',
    fontSize: '20px',
    marginBottom: '5px',
       
      };

      const imageStyle = {
      height:'60',
        objectFit: 'cover', 
      };

  return (    
    
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators-left">
      <p type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="slide" aria-current="true" aria-label="Slide 1">01</p>
        <p type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className="slide">02</p>
        <p type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className="slide">03</p>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://img.freepik.com/free-photo/front-view-vegetable-composition-with-seasonings-greens-white-background-color-photo-vegetable-healthy-life-salad-meal-ripe_140725-139555.jpg?w=996&t=st=1702533696~exp=1702534296~hmac=e56d475af133d27f9cb3c94d351874d22bbbf5f3a7f25dc4c97672402536b520" className="d-block w-100 img " alt="img1" style={imageStyle} />
          <div className="carousel-caption " style={carouselCaptionStyle} >
            <Fade top>
            <h2 className='heading'>Healthy Vegetables</h2>           
            <p className='paragraph1 '>PERFECT <span className='span'>BREAKFAST</span></p>
          <p className='paragraph2 '> BEST WEEKLY PRICES</p>
          <button className='button1' type="button">Shop Now</button>
            </Fade>       
          
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://www.shutterstock.com/shutterstock/photos/1939183168/display_1500/stock-photo-delicious-lemon-curd-and-fresh-fruits-on-light-grey-table-flat-lay-space-for-text-1939183168.jpg" className="d-block w-100 img" alt="img2" style={imageStyle}  />
          <div className="carousel-caption " style={carouselCaptionStyle}>
        <Fade top>
          <h2 className='heading'>Healthy Fruits</h2>         
          <p className='paragraph1'>HEALTHY <span className='span'>ORGANIC</span></p>
          <p className='paragraph2'> FOOD EVERYDAY</p>
          <button className='button1' type="button">Shop Now</button>
            </Fade>           
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=1024x1024&w=is&k=20&c=ZP6MR_8ca51_wrOQFjp5HN0cK1TwmMHMc8sRZy9Dxn4=" className="d-block w-100 img" alt="img3" style={imageStyle} />
          <div className="carousel-caption " style={carouselCaptionStyle}>
        <Fade top>
          <h2 className='heading'>All You Need</h2>           
          <p className='paragraph1'>FRESH <span className='span'>GROCERY</span></p>
          <p className='paragraph2'> DESERVE TO EAT FOOD</p> 

          <button className='button1' type="button">Shop Now</button>
         </Fade>       
          </div>
        </div>
      </div>       
    </div>
  
  );
};

export default Banner;