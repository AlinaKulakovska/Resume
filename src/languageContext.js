
import React, { createContext, useState, useEffect } from 'react';

let en = {
    "name": "Alina Kulakovska",
    "position": "Front-end developer",
    "description": "Building things for the web has always been exciting to me. It's like taking a blank canvas and turning it into something interactive, visually appealing, and user-friendly. As a front-end developer, I focus on the user-facing side of websites and applications. I love the challenge of bringing those elements together to create a seamless and enjoyable experience for users. One of my strengths is being a fast learner. The tech world is constantly evolving, and I'm always eager to pick up new skills and frameworks. "
}
let ua = {
    "name": "Аліна Кулаковська",
    "position": "Фронтенд-розробниця",
    "description": "Створювати речі для Інтернету завжди було для мене цікавим заняттям. Це як взяти чисте полотно і перетворити його на щось інтерактивне, візуально привабливе та зручне для користувача. Як фронтенд-розробник, я зосереджуюсь на користувацькій стороні веб-сайтів та додатків. Мені подобається завдання об'єднати ці елементи разом, щоб створити безперебійний і приємний досвід для користувачів. Однією з моїх сильних сторін є те, що я швидко навчаюсь. Світ технологій постійно розвивається, і я завжди прагну здобути нові навички та фреймворки. "
  }

const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [languageData, setLanguageData] = useState({});
    useEffect(() => {
        fetchLanguageData()
    }, []);
    useEffect(() => {
        fetchLanguageData()
    }, [language]);

   function fetchLanguageData(){
    if (language == 'en'){
        setLanguageData(en)
    } else {
        setLanguageData(ua)
    }
   }
 
    // const fetchLanguageData = () => {
    //     const dataUrl = `./locales/${language}.json`;
    //     fetch(dataUrl)
    //         .then((response) => response.json())
    //         .then((data) => {setLanguageData(data); console.log(languageData)})
    //         .catch((error) => console.error('Error fetching language data:', error));
    // };
    return (
        <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
            {children}
        </LanguageContext.Provider>
    );
};
export { LanguageContext, LanguageProvider };
