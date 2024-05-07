
import React, { createContext, useState, useEffect } from 'react';

let en = {
    "name": "Alina Kulakovska",
    "position": "Front-end developer",
    "description": "Building things for the web has always been exciting to me. It's like taking a blank canvas and turning it into something interactive, visually appealing, and user-friendly. As a front-end developer, I focus on the user-facing side of websites and applications. I love the challenge of bringing those elements together to create a seamless and enjoyable experience for users. One of my strengths is being a fast learner. The tech world is constantly evolving, and I'm always eager to pick up new skills and frameworks. ",
    "sitename": "Thrive Recipes Practice website",
    "sitedesc": "This is a practice responsive website where I've integrated a variety of features to demonstrate my proficiency in web development.",
    "siteul": <div>
        <p className="mt-2"><b>Page Pagination:</b>  I've implemented page pagination which shows 3 recipes per page. </p>
        <p className="mt-2"><b>API Fetching Random Meal:</b> I've integrated an API fetching feature that displays random meal suggestions.</p>
        <p className="mt-2"><b>Sorting Recipes:</b>  I've included a sorting functionality for recipes. </p>
        <p className="mt-2"><b>Searching for Meals: </b> I've incorporated a search feature, allowing users to input keywords and instantly retrieve relevant meal options.</p>
        <p className="mt-2"><b>Adding Recipes: </b> Abilitty to add own recipes via form.</p>
        <p className="mt-2"><b>Selecting Only Recipes with Specific Category: </b> I've included the option to filter recipes by category.</p>
        <p className="mt-2"><b>Local Storage for Parsing Data:</b>  I've utilized local storage to store data of clicked recipes.</p>
        <p className="mt-2"><b>For this project i used JS, HTML, CSS</b></p>
    </div>,
        "zoo": [{
            "one": "one"
}],
}
let ua = {
    "name": "Аліна Кулаковська",
    "position": "Фронтенд-розробниця",
    "description": "Створювати вебсайти завжди було для мене цікавим заняттям. Це як взяти чисте полотно і перетворити його на щось інтерактивне, візуально привабливе та зручне для користувача. Як фронтенд-розробник, я зосереджуюсь на користувацькій стороні веб-сайтів та додатків. Мені подобається завдання об'єднати ці елементи разом, щоб створити безперебійний і приємний досвід для користувачів. Однією з моїх сильних сторін є те, що я швидко навчаюсь. Світ технологій постійно розвивається, і я завжди прагну здобути нові навички та фреймворки. ",
    "sitename": "Thrive - Сайт рецептів",
    "sitedesc": "Це практичний адаптивний веб-сайт, де я інтегрував різноманітні функції, щоб продемонструвати свою майстерність у веб-розробці.",
    "siteul": <div>
        <p className="mt-2"><b>Пагінація сторінок:</b>  Я реалізував пагінацію сторінок, яка показує по 3 рецепти на сторінці. </p>
        <p className="mt-2"><b>API Отримання випадкового рецепту:</b> Я інтегрував функцію отримання даних через API, яка відображає випадкові пропозиції страв.</p>
        <p className="mt-2"><b>Сортування рецептів:</b> Я включив функцію сортування рецептів. </p>
        <p className="mt-2"><b>Пошук страв: </b>Я включив функцію пошуку, яка дозволяє користувачам вводити ключові слова і миттєво знаходити відповідні варіанти страв.</p>
        <p className="mt-2"><b>Додавання рецептів: </b>  Можливість додавати власні рецепти через форму.</p>
        <p className="mt-2"><b>Вибір тільки рецептів з певної категорії: </b> Я включив опцію фільтрації рецептів за категоріями.</p>
        <p className="mt-2"><b>Локальне сховище для парсингу даних:</b> Я використовував локальне сховище для зберігання даних про натиснуті рецепти.</p>
        <p className="mt-2"><b>Для цього проекту я використовувала JS, HTML, CSS</b></p>
    </div>,
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

    function fetchLanguageData() {
        if (language === 'en') {
            setLanguageData(en)
        } else {
            setLanguageData(ua)
        }
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
            {children}
        </LanguageContext.Provider>
    );
};
export { LanguageContext, LanguageProvider };
