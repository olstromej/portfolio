import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/1.jpg" />
              </div>
              <div className="title_holder">
                <p>Javascript, HTML, CSS</p>
                <h3>
                  <a href="#">Connect Four</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Javascript, HTML</p>
                <h3 className="fn__title">Connect Four</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/1.jpg" />
                </div>
                <p className="fn__desc">
                A Connect Four game with built-in CSS animation that allows a user to reset after a game has been won. Built with Javascript, HTML, CSS, Flexbox.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/2.jpg" />
              </div>
              <div className="title_holder">
                <p>Mongoose, Express, API, CRUD</p>
                <h3>
                  <a href="#">API Project</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Express, Mongoose</p>
                <h3 className="fn__title">JSON API</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/2.jpg" />
                </div>
                <p className="fn__desc">
                A JSON API built from the ground up using mongoose and express. This JSON API has complete CRUD functionality with RESTful routes. Deployed to Railway.
                </p>
        
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/3.jpg" />
              </div>
              <div className="title_holder">
                <p>Tab & Modal, Axios, Node-Fetch</p>
                <h3>
                  <a href="#">React Application</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React</p>
                <h3 className="fn__title">React Application</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/3.jpg" />
                </div>
                <p className="fn__desc">
                Built a Tab and Modal UI pattern application in React and integrated two separate APIS. Built with React, Axios, CSS, JavaScript, Node-fetch.
                </p>
           
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/4.jpg" />
              </div>
              <div className="title_holder">
                <p>React, CRUD, API</p>
                <h3>
                  <a href="#">Mern React</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React Application</p>
                <h3 className="fn__title">Mern React</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/4.jpg" />
                </div>
                <p className="fn__desc">
                This project was built with React and is a front end to one of my classmates deployed API and has partial CRUD functionality that gives a user the ability to create, read, and delete.
                </p>
              
      
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(5);
              }}
              data-index={5}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/5.jpg" />
              </div>
              <div className="title_holder">
                <p>react, application</p>
                <h3>
                  <a href="#">MERN Stack Group Project</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React, Full stack</p>
                <h3 className="fn__title">MERN Stack Group Project</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/5.jpg" />
                </div>
                <p className="fn__desc">
                Group project workout application using full stack mongo/express/react/node application.
                </p>
       
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
