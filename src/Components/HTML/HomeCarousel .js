import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Kitchen from "../Resources/image/Banner/Kitchen.jpg";
import Beauty from "../Resources/image/Banner/Beauty.jpg";
import Gaming from "../Resources/image/Banner/Gaming.jpg";
import Shop from "../Resources/image/Banner/Shop.jpg";
import '../CSS/Home.css';
import Toys from "../Resources/image/Banner/Toys.jpg";




function HomeCarousel() {

    return (
        <div className='home-image'>
            <Carousel>
                <Carousel.Item>

                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Kitchen}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Beauty}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Gaming}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Shop}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Toys}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}

export default HomeCarousel;
