import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";


import logo from "./images/MyLogo2.png"
import portrait from "./images/portrait.png"
import back from "./images/soft-wallpaper.png"

import React from "react";
import { useState, useContext } from "react";
import { LanguageContext } from './languageContext';
import MyStack from "./components/MyStack";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const { language, languageData, setLanguage } = useContext(LanguageContext);
  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ua' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-15 lg:px-32" style={{ backgroundImage: `url(${back})` }}>
        <section className="min-h-screen">
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
                <p className="text-md py-5 text-justify text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                  {languageData.description}
                </p>
                <p className="text-[#B3B8FD] text-center">e-mail: kulakovska07@gmail.com</p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <a href={"https://github.com/AlinaKulakovska"}><AiFillGithub /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      <MyStack />

       
       <section className="mt-20">
asd
       </section>
      </main>
    </div>
  );
}

export default App;
