import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";

  function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="font-burtons text-xl">Developer</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-amber-300 text- to-amber-700 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
            <h2 className="text-4xl py-2 text-amber-500 font-medium dark:text-amber-500 md:text-6xl">
              Alina Kulakovska
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             Front-end developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming content
              needs. Join me down below and let's get cracking!
              <br/><span className="text-amber-500">e-mail: kulakovska07@gmail.com</span>
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href={"https://github.com/AlinaKulakovska"}><AiFillGithub /></a>
            
            </div>
            <div className="mx-auto bg-gradient-to-b from-amber-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img className="object-fill h-40 w-40 md:h-96 md:w-96" src='https://cdn-icons-png.flaticon.com/512/3270/3270999.png'  alt="person"/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-amber-500"> agencies </span>
              consulted for <span className="text-amber-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 ">
            
            <div className="text-center shadow-lg p-10 bg-gray-200 text-slate-600 rounded-xl my-10 dark:bg-slate-600 dark:text-gray-200">

              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-amber-500">Programming Tools I Use</h4>
              <p className="text-gray-600 py-1 dark:text-gray-200">◈React</p>
              <p className="text-gray-600 py-1 dark:text-gray-200">◈JS</p>
              <p className="text-gray-600 py-1 dark:text-gray-200">◈Tailwindcss</p>
              <p className="text-gray-600 py-1 dark:text-gray-200">◈Html\CSS</p>
              <p className="text-gray-600 py-1 dark:text-gray-200">◈Bootstrap</p>
              <p className="text-gray-600 py-1 dark:text-gray-200">◈Figma</p>
            </div>

          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance
              developer, I've done remote work for
              <span className="text-amber-500"> agencies </span>
              consulted for <span className="text-amber-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use. I offer coding your website
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a href={"https://alinakulakovska.github.io/TravelBlog/"}>
              <img alt="site1" className="rounded-lg object-cover" src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/db4e33e0c541aae926a1d83ccb0b5ddcd3892c61058561559e3a7ef0e43d6fcb1628693040055.jpg"/>
              </a></div>
              <div className="basis-1/3 flex-1 ">
              <a href={"https://alinakulakovska.github.io/Productshop/"}>
              <img alt="site2" className="rounded-lg object-cover" src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/36f43fd77b7af2ba582969c31de1b0e17a79318199328f9bca8b444825d012d71631446807689.jpg"/>
              </a> </div>
              </div>
        </section>
        </main>
        </div>
    );
  }

  export default App;
