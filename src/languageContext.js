
import React, { createContext, useState, useEffect } from 'react';

let en = {
    "name": "Alina Kulakovska",
    "position": "Front-end developer",
    "description": "Building things for the web has always been exciting to me. It's like taking a blank canvas and turning it into something interactive, visually appealing, and user-friendly. As a front-end developer, I focus on the user-facing side of websites and applications. I love the challenge of bringing those elements together to create a seamless and enjoyable experience for users. One of my strengths is being a fast learner. The tech world is constantly evolving, and I'm always eager to pick up new skills and frameworks. ",
    "zoositename": "Thrive Recipes Practice website",
    "zoositedesc": <div>
 <p>
 This is a practice responsive website where I've integrated a variety of features to demonstrate my proficiency in web development.
                  </p>
        <p className="mt-2"><b>Page Pagination:</b>  I've implemented page pagination which shows 3 recipes per page. </p>
        <p className="mt-2"><b>API Fetching Random Meal:</b> I've integrated an API fetching feature that displays random meal suggestions.</p>
        <p className="mt-2"><b>Sorting Recipes:</b> </p>
        <p className="mt-2"><b>Searching for Meals: </b> I've incorporated a search feature, allowing users to input keywords and instantly retrieve relevant meal options.</p>
        <p className="mt-2"><b>Adding Recipes: </b> Abilitty to add own recipes via form.</p>
        <p className="mt-2"><b>Selecting Only Recipes with Specific Category: </b> I've included the option to filter recipes by category.</p>
        <p className="mt-2"><b>Local Storage for Parsing Data:</b>  I've utilized local storage to store data of clicked recipes.</p>
        <p className="mt-2"><b>For this project i used JS, HTML, CSS</b></p>
    </div>,
        "toyname":"Codes for sale",
        "toydesc":<div>
                 <p className="text-md py-5  ">
                      Within this collection, you'll find a series of meticulously crafted codes designed specifically for selling templates on Toyhouse. These templates serve as an indispensable tool for designers seeking to vividly portray their characters and worlds on the Toyhouse platform.
                    </p>
                    <ul className="list-disc ml-4"><b>Technologies Utilized:</b>
                      <li className="mt-2">Bootstrap: Leveraging the power and flexibility of Bootstrap framework, I ensured seamless responsiveness and dynamic functionality across various devices and screen sizes.
                      </li>
                      <li className="mt-2">HTML: HTML was expertly employed to structure the content, ensuring clarity and accessibility.</li>
                      <li className="mt-2">CSS: With CSS, I breathed life into the designs, meticulously crafting styles to enhance visual appeal and user experience.</li>
                      <li>Figma: Prior to coding, meticulous design work was carried out in Figma, laying the groundwork for visually stunning and intuitive interfaces.
                      </li>
                    </ul>

        </div>,
}
let ua = {
    "name": "Аліна Кулаковська",
    "position": "Фронтенд-розробниця",
    "description": "Створювати вебсайти завжди було для мене цікавим заняттям. Це як взяти чисте полотно і перетворити його на щось інтерактивне, візуально привабливе та зручне для користувача. Як фронтенд-розробник, я зосереджуюсь на користувацькій стороні веб-сайтів та додатків. Мені подобається завдання об'єднати ці елементи разом, щоб створити безперебійний і приємний досвід для користувачів. Однією з моїх сильних сторін є те, що я швидко навчаюсь. Світ технологій постійно розвивається, і я завжди прагну здобути нові навички та фреймворки. ",
    "zoositename": "Thrive - Сайт рецептів",
    "zoositedesc": <div>
         <p>
         Це практичний адаптивний веб-сайт, де я інтегрував різноманітні функції, щоб продемонструвати свою майстерність у веб-розробці.
                  </p>
        <p className="mt-2"><b>Пагінація сторінок:</b> яка показує по 3 рецепти на сторінці. </p>
        <p className="mt-2"><b>API Отримання випадкового рецепту:</b>  функція отримання даних через API, яка відображає випадкові пропозиції страв.</p>
        <p className="mt-2"><b>Сортування рецептів:</b></p>
        <p className="mt-2"><b>Пошук страв: </b> функцію пошуку, яка дозволяє користувачам вводити ключові слова і миттєво знаходити відповідні варіанти страв.</p>
        <p className="mt-2"><b>Додавання рецептів: </b>  Можливість додавати власні рецепти через форму.</p>
        <p className="mt-2"><b>Вибір тільки рецептів з певної категорії: </b> опція фільтрації рецептів за категоріями.</p>
        <p className="mt-2"><b>Локальне сховище для парсингу даних:</b> Я використовувала локальне сховище для зберігання даних про натиснуті рецепти.</p>
        <p className="mt-2"><b>Для цього проекту я використовувала JS, HTML, CSS</b></p>
    </div>,
    "toyname":"Коди на продаж",
    "toydesc":<div>
    <p className="text-md py-5  ">
    У цій колекції ви знайдете серію ретельно розроблених кодів, створених спеціально для продажу шаблонів на Toyhouse. Ці шаблони слугують незамінним інструментом для дизайнерів, які прагнуть яскраво зобразити своїх персонажів та світи на платформі Toyhouse.
                    </p>
                    <ul className="list-disc ml-4"><b>Використані технології:</b>
                      <li className="mt-2">Bootstrap: Використовуючи потужність і гнучкість фреймворку Bootstrap, я забезпечила бездоганну адаптивність і динамічну функціональність на різних пристроях і з різними розмірами екранів.
                      </li>
                      <li className="mt-2">HTML: Для структурування контенту було майстерно використано HTML, що забезпечило чіткість і доступність.</li>
                      <li className="mt-2">CSS: За допомогою CSS я вдихнула життя в дизайн, ретельно розробляючи стилі, щоб покращити візуальну привабливість та зручність користування.</li>
                      <li>Figma: Перед кодуванням була проведена ретельна робота над дизайном у Figma, яка заклала основу для візуально приголомшливих та інтуїтивно зрозумілих інтерфейсів.
                      </li>
                    </ul>
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
