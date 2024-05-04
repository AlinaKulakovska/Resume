import React from "react";
import Slider from "react-slick";



export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className="mb-16 w-full md:w-2/5">
            <div className="">
                <img className="  rounded-lg" src={'https://storage.ko-fi.com/cdn/useruploads/display/b21601f8-2333-4e08-99f7-6d8c1d5132b5_toyhou.se_~world_168844.p2u-world-csshtml.png'} alt="person" />
            </div>

            <div>
                <img className="   rounded-lg" src={'https://storage.ko-fi.com/cdn/useruploads/display/28f4ae59-b8ed-490e-acad-c4eb2abecf05_1.jpg'} alt="person" />
            </div>
            <div>
                <img className=" rounded-lg" src={'https://storage.ko-fi.com/cdn/useruploads/display/da181b0c-29e9-4aea-ae65-2455665b6e8d_image_2024-03-06_134844241.png'} alt="person" />
            </div>
        </Slider>
    );
}