import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import './css.css'
import logo from "./images/MyLogo2.png"
import portrait from "./images/portrait.png"
import back from "./images/soft-wallpaper.png"
import thrive from './images/alinakulakovska.github.io_Thrive_ (1).png'
import zoomain from './images/alinakulakovska.github.io_Zoo_.png'
import zoofull from './images/alinakulakovska.github.io_Zoo_ (1).png'
import zootickets from './images/alinakulakovska.github.io_Zoo_Tickets.html.png'
import zooprices from './images/alinakulakovska.github.io_Zoo_Prices.html.png'
import zoomap from './images/alinakulakovska.github.io_Zoo_Map.html.png'
import watches from './images/alinakulakovska.github.io_Productshop_.png'
import watchesbascket from './images/alinakulakovska.github.io_Productshop_busket.html.png'
import watchesbuy from './images/alinakulakovska.github.io_Productshop_buy.html (1).png'




import React from "react";
import { useState, useContext } from "react";
import { LanguageContext } from './languageContext';
import MyStack from "./components/MyStack";

import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const { language, languageData, setLanguage } = useContext(LanguageContext);
  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ua' : 'en';
    setLanguage(newLanguage);
  };


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white  dark:bg-gray-900 overflow-hidden" style={{ backgroundImage: `url(${back})` }}>
        <section className=" px-10 md:px-15 lg:px-32 ">
          <nav className="pt-5 -mb-8 flex justify-between dark:text-white">
            <img className="object-fill h-20 w-20 md:h-28 md:w-28" src={logo} alt="logo" />
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button onClick={handleToggleLanguage} className="ml-6 px-4 border-2 py-1 border-[#B3B8FD] rounded-md flex align-middle active:bg-[#B3B8FD] transition-all ">{language}</button>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-[#F6C4C4] text- to-[#B3B8FD] text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1HCoHMBY8EZjO4mIr14ZSatgh2X0Cs8Zz/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center py-10">
            <h2 className="text-4xl py-2 text-[#B3B8FD] font-medium dark:text-[#B3B8FD] md:text-6xl">
              {languageData.name}
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              {languageData.position}
            </h3>
            <div className="flex justify-between items-center flex-col md:flex-row">
              <div className="flex justify-center">
                <img className="object-fit max-w-xs md:max-w-sm" src={portrait} alt="person" />
              </div>
              <div className="ml-0 md:ml-12">
                <h3 className="text-right text-2xl m-0 p-0 md:text-4xl italic text-gray-800 dark:text-gray-200">Hello,</h3>
                <p className="text-md py-5 text-justify text-gray-800 dark:text-gray-200 ">
                  {languageData.description}
                </p>
                <p className="text-[#B3B8FD] text-center ">e-mail: kulakovska07@gmail.com</p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <a href={"https://github.com/AlinaKulakovska"}><AiFillGithub /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MyStack />
        <div className=" px-6 lg:px-20 ">
          <h2 className="text-4xl py-2   text-center text-[#F6C4C4] font-medium dark:text-[#B3B8FD] md:text-6xl mt-24 mb-6">
            Recent work
          </h2>
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="flex justify-center mb-4 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img className="object-fit max-w-full sm:max-w-xs lg:max-w-md rounded-lg " src={thrive} alt="website" />
            </div>
            <ScrollAnimation animateIn='bounceInRight'
              animateOut='bounceOutLeft'>

              <div className="ml-0 md:ml-12 p-2 ">
                <a href="https://alinakulakovska.github.io/Thrive/" ><h3 className="text-right text-2xl m-0 p-0 md:text-4xl italic text-gray-800 dark:text-gray-200 underline hover:sunderline">Thrive Recipes Practice website</h3></a>

                <div className="text-md py-5 text-justify text-gray-800 dark:text-gray-200 ">
                  <p>
                    This is a practice responsive website where I've integrated a variety of features to demonstrate my proficiency in web development.  </p>
                  <p className="mt-2"><b>Page Pagination:</b>  I've implemented page pagination which shows 3 recipes per page. </p>
                  <p className="mt-2"><b>API Fetching Random Meal:</b> I've integrated an API fetching feature that displays random meal suggestions.</p>
                  <p className="mt-2"><b>Sorting Recipes:</b>  I've included a sorting functionality for recipes. </p>
                  <p className="mt-2"><b>Searching for Meals: </b> I've incorporated a search feature, allowing users to input keywords and instantly retrieve relevant meal options.</p>
                  <p className="mt-2"><b>Adding Recipes: </b> Abilitty to add own recipes via form.</p>
                  <p className="mt-2"><b>Selecting Only Recipes with Specific Category: </b> I've included the option to filter recipes by category.</p>
                  <p className="mt-2"><b>Local Storage for Parsing Data:</b>  I've utilized local storage to store data of clicked recipes.</p>
                  <p className="mt-2"><b>For this project i used JS, HTML, CSS</b></p>
                </div>
              </div>


            </ScrollAnimation>

          </div>

          <div className="flex justify-between items-center flex-col md:flex-row">
            <ScrollAnimation animateIn='bounceInLeft'
              animateOut='bounceOutRight'>
              <div className="ml-0 md:mr-12 text-justify text-gray-800 dark:text-gray-200">
                <a href="https://toyhou.se/_AngeLux_/characters/folder:4475338" > <h3 className="text-right text-2xl m-0 p-0 md:text-4xl italic underline hover:no-underline text-gray-800 dark:text-gray-200">Codes for comercial use</h3> </a>
                <p className="text-md py-5  ">
                  Within this collection, you'll find a series of meticulously crafted codes designed specifically for selling templates on Toyhouse. These templates serve as an indispensable tool for designers seeking to vividly portray their characters and worlds on the Toyhouse platform.
                </p>
                <ul className="list-disc"><b>Technologies Utilized:</b>
                  <li className="mt-2">Bootstrap: Leveraging the power and flexibility of Bootstrap framework, I ensured seamless responsiveness and dynamic functionality across various devices and screen sizes.
                  </li>
                  <li className="mt-2">HTML: The backbone of web development, HTML was expertly employed to structure the content, ensuring clarity and accessibility.</li>
                  <li className="mt-2">CSS: With CSS, I breathed life into the designs, meticulously crafting styles to enhance visual appeal and user experience.</li>
                  <li>Figma: Prior to coding, meticulous design work was carried out in Figma, laying the groundwork for visually stunning and intuitive interfaces.
                  </li>
                </ul>
              </div>

            </ScrollAnimation>
            <Slider {...settings} className="mb-16 w-full md:w-2/5">
              <div>
                <img className="rounded-lg" src={'https://storage.ko-fi.com/cdn/useruploads/display/b21601f8-2333-4e08-99f7-6d8c1d5132b5_toyhou.se_~world_168844.p2u-world-csshtml.png'} alt="person" />
              </div>
              <div>
                <img className="rounded-lg" src={'https://storage.ko-fi.com/cdn/useruploads/display/28f4ae59-b8ed-490e-acad-c4eb2abecf05_1.jpg'} alt="person" />
              </div>
              <div>
                <img className="rounded-lg" src={'https://storage.ko-fi.com/cdn/useruploads/display/da181b0c-29e9-4aea-ae65-2455665b6e8d_image_2024-03-06_134844241.png'} alt="person" />
              </div>
            </Slider>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row">
            <Slider {...settings} className="mb-16 w-full md:w-2/5 ml-0 md:mr-12">
              <div >
                <img className="rounded-lg" src={zoomain} alt="zoo" />
              </div>
              <div className="max-h-72 overflow-y-auto rounded-lg ">
                <img className="rounded-lg" src={zoofull} alt="zoo" />
              </div>
              <div>
                <img className="rounded-lg" src={zoomap} alt="zoo" />
              </div>
              <div>
                <img className="rounded-lg" src={zooprices} alt="zoo" />
              </div>
              <div>
                <img className="rounded-lg" src={zootickets} alt="zoo" />
              </div>
            </Slider>

            <ScrollAnimation animateIn='bounceInRight'
              animateOut='bounceOutLeft'>
              <div>
                <a href="https://alinakulakovska.github.io/Zoo/" > <h3 className="text-right text-2xl m-0 p-0 md:text-4xl italic underline hover:no-underline text-gray-800 dark:text-gray-200">Zoo website Project</h3> </a>
                <div className="text-md py-5 text-justify text-gray-800 dark:text-gray-200 ">
                  <p className="mt-2"><b>Price Rate Conversion via API: </b> Real-time price rate conversion via API ensures that visitors from around the globe can easily understand ticket prices, facilitating a seamless booking experience.</p>
                  <p className="mt-2"><b>Map with Animal Description: </b> An interactive map feature guides users through the zoo's layout while providing insightful descriptions of each animal exhibit, enriching the visitor's journey with educational content.</p>
                  <p className="mt-2"><b>Ticket Purchase Page:</b>  I've utilized local storage to store data of clicked recipes.</p>
                  <p className="mt-2"><b>Carousel of Images:</b>  A visually stunning carousel showcases captivating images of various animals, offering visitors a glimpse into the beauty and diversity of the zoo's inhabitants.</p>
                  <p className="mt-2"><b>Modal with animation: </b></p>
                  <p className="mt-2"><b>For this project i used JS, HTML, CSS</b></p>
                </div>
              </div>
            </ScrollAnimation>
          </div>


          <div className="flex justify-between items-center flex-col md:flex-row">
            <ScrollAnimation animateIn='bounceInLeft'
              animateOut='bounceOutRight'>
              <div className="ml-0 md:mr-12">
                <a href="https://alinakulakovska.github.io/Productshop/" > <h3 className="text-right text-2xl m-0 p-0 md:text-4xl italic underline hover:no-underline text-gray-800 dark:text-gray-200">E-Commerce Website Project: Smart-Watch Store</h3> </a>
                <div className="text-md py-5 text-justify text-gray-800 dark:text-gray-200 ">
                  <p className="mt-2"><b>Flowy Front Page: </b> Real-time price rate conversion via API ensures that visitors from around the globe can easily understand ticket prices, facilitating a seamless booking experience.</p>
                  <p className="mt-2"><b>Purchase Page: </b> The purchase page provides customers with the ability to customize their order by selecting their preferred color and quantity for each product. Detailed descriptions of the watch's characteristics help customers make informed decisions.
                  </p>
                  <p className="mt-2"><b>Customization Options:</b>  I've utilized local storage to store data of clicked recipes.</p>
                  <p className="mt-2"><b>Checkout Page:</b>  Seamlessly transition from product selection to checkout with the user-friendly checkout page. Here, customers can review their selected items, view the total cost, and proceed to finalize their purchase with confidence.
                  </p>
                  <p className="mt-2"><b>For this project i used JS, HTML, CSS</b></p>
                </div>
              </div>
            </ScrollAnimation>
            <Slider {...settings} className="mb-16 w-full md:w-2/5">
              <div className="max-h-64 overflow-y-auto rounded-lg  ">
                <img className="rounded-lg " src={watches} alt="watches" />
              </div>
              <div >
                <img className="rounded-lg" src={watchesbascket} alt="watches" />
              </div>
              <div>
                <img className="rounded-lg" src={watchesbuy} alt="watches" />
              </div>
            </Slider>
          </div>

          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="flex justify-center mb-4 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img className="object-fit max-w-full sm:max-w-xs lg:max-w-md rounded-lg " src={'https://github.com/AlinaKulakovska/QuizAppReact/raw/main/public/image_2023-05-03_16-48-18.png'} alt="website" />
            </div>
            <ScrollAnimation animateIn='bounceInRight'
              animateOut='bounceOutLeft'>
              <div className="ml-0 md:ml-12 p-2 ">
                <h3 className="text-right text-2xl m-0 p-0 md:text-4xl italic text-gray-800 dark:text-gray-200 ">Quiz App with Timer using React</h3>
                <div className="text-md py-5 text-justify text-gray-800 dark:text-gray-200 ">
                  <p>
                    This Quiz App with Timer using React offers a fun and immersive way to test your knowledge while sharpening your cognitive skills </p>
                  <p className="mt-2"><b>Multiple-Choice Questions:</b>  </p>
                  <p className="mt-2"><b>Questions with Images:</b> </p>
                  <p className="mt-2"><b>Multiple-Point Questions:</b> </p>
                  <p className="mt-2"><b>Timer: </b> </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
