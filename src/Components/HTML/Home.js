import React from 'react'
import '../CSS/Home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import HomeCarousel from './HomeCarousel ';
// import Refresh from '../Resources/image/Banner/Refresh.jpeg';
// import Prodacts from './Prodacts';
// import pro0 from '../Resources/image/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg';
// //import pro1 from '../Resources/image/Product/Game/pro1.jpg';
// import pro2 from '../Resources/image/Product/Game/pro2.jpg';
// import pro3 from '../Resources/image/Product/Game/pro3.jpg';
// import pro4 from '../Resources/image/Product/Game/pro4.jpg';
// import proc1 from '../Resources/image/Product/catagory/proc1.jpg';
// import proc2 from '../Resources/image/Product/catagory/proc2.jpg';
// import proc3 from '../Resources/image/Product/catagory/proc3.jpg';
// import proe1 from '../Resources/image/Product/Electronics/proe1.jpg';
// import proe2 from '../Resources/image/Product/Electronics/proe2.jpg';
// import proh1 from '../Resources/image/Product/health/proh1.jpg';
// import proco1 from '../Resources/image/Product/computer/proco1.jpg';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <HomeCarousel />
                {/* <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> */}
                <div className="home_row">
                    <Product
                        id="12321341"
                        title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
                        price={1669}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
                        price={159.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="4903850"
                        title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
                        price={499.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
                    />

                    <Product
                        id="99903850"
                        title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
                        price={139.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home_row">

                    <Product
                        id="12321341"
                        title="Legendary Whitetails Men's Buck Camp Flannel Solid Shirt"
                        price={250}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91J-9FnWIdL._AC_SY200_.jpg
                        "
                    />
                    <Product
                        id="12321345"
                        title="Legendary Whitetails Men's Buck Camp Flannel Solid Shirt"
                        price={800}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51qra2kbIDL._AC_SY200_.jpg
                        "
                    />
                    <Product
                        id="12321342"
                        title="Legendary Whitetails Men's Buck Camp Flannel Solid Shirt"
                        price={160}
                        rating={4}
                        image="	https://images-na.ssl-images-amazon.com/images/I/91tQnJSrbhL._AC_UL160_SR160,160_.jpg
                        "
                    />

                </div>
                <div className="home_row">
                    <Product
                        id="903850"
                        title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
                        price={69.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
                    />
                    <Product
                        id="8903851"
                        title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
                        price={999.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                </div>
            </div>
        </div>
    );
}


export default Home;