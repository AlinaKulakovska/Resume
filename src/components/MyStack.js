import { FaBootstrap, FaCss3, FaFigma, FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { IoIosClose, IoIosRemove, IoLogoJavascript, IoMdBrowsers } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

function MyStack() {



  return (
    <section className="text-slate-600 dark:text-gray-300">
      <div className="border-2 text-2xl border-slate-600 p-2  flex justify-end dark:border-gray-300 ">
        <IoIosRemove />
        <IoMdBrowsers className="ml-2" />
        <IoIosClose className="ml-2" />
      </div>
      <div className="border-2 border-t-0 border-slate-600   dark:border-gray-300 w-100 flex flex-col md:flex-row">
        <div className="w-full bg-[rgba(157,158,165,0.3)] p-4 md:w-1/3 relative">
          <h2 className="text-6xl font-black right-[5px] top-0 text-[rgba(255,255,255,0.3)] absolute">
            STACK
          </h2>
          <div className="flex items-center mt-20">
            <FaHtml5 className="text-3xl mr-2" />
            <div className="w-full text-right">
              <h6>HTML</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class=" w-[80%] flex flex-col justify-center overflow-hidden bg-[#F6C4C4]  text-center"></div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center">
            <FaCss3 className="text-3xl mr-2" />
            <div className="w-full text-right">
              <h6>CSS</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class=" w-[80%] flex flex-col justify-center overflow-hidden bg-[#F6C4C4]  text-center"></div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center">
            <IoLogoJavascript className="text-3xl mr-2" />
            <div className="w-full text-right">
              <h6>JavaScript</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class=" w-[60%] flex flex-col justify-center overflow-hidden bg-[#F6C4C4]  text-center"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <FaBootstrap className="text-3xl mr-2" />
            <div className="w-full text-right">
              <h6>Bootstrap</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class=" w-[75%] flex flex-col justify-center overflow-hidden bg-[#F6C4C4]  text-center"></div>
              </div>
            </div>
          </div>
          {/*  */}
          
          {/*  */}
          <div className="flex items-center">
            <FaReact className="text-3xl mr-2" />
            <div className="w-full text-right">
              <h6>React</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class=" w-[35%] flex flex-col justify-center overflow-hidden bg-[#F6C4C4]  text-center"></div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="flex justify-center items-center mt-3">
            <FaGit className="text-3xl mr-2" />
            <FaFigma className="text-3xl mr-2" />
            <SiTailwindcss className="text-3xl " />
          </div>
        </div>

        <div className="w-full p-2 md:w-2/3">
          <div className="w-full relative">
            <h2 className="text-5xl font-black left-0 top-0 text-[rgba(0,0,0,0.3)] ">
              CAREER
            </h2>
          </div>
          <p className="text-xl mt-2"><a href="https://toyhou.se/_AngeLux_/characters/folder:4475338" className="hover:text-[#F6C4C4] underline hover:no-underline">HTML-Coder, Freelance</a><span className="text-[#B3B8FD] text-lg"> ~ 6 months</span></p>


          <div className="w-full relative">
            <h2 className="text-5xl font-black left-0 top-0 text-[rgba(0,0,0,0.3)]">
              EDUCATION
            </h2>
          </div>
          <p className="text-xl mt-2">KYIV NATIONAL ECONOMIC UNIVERSITY</p>
          <p className="text-lg">Cybersecurity <span className="text-[#B3B8FD] ">2020-2024</span></p>

          <div className="w-full relative">
            <h2 className="text-5xl font-black left-0 top-0 text-[rgba(0,0,0,0.3)]">
              COURSES
            </h2>
          </div>

          <p className="text-xl mt-2"><a href="#" className="hover:text-[#F6C4C4] underline hover:no-underline">freeCodeCamp - JavaScript Algorithms and Data Structures</a><span className="text-[#B3B8FD] text-lg"> - 05.2023</span></p>
          <p className="text-xl "><a href="#" className="hover:text-[#F6C4C4] underline hover:no-underline">scrimba - Learn React</a><span className="text-[#B3B8FD] text-lg"> - 08.2023</span></p>

          <div className="w-full relative">
            <h2 className="text-5xl font-black left-0 top-0 text-[rgba(0,0,0,0.3)]">
              LANGUAGE
            </h2>
          </div>
          <p className="text-xl mt-2">Ukrainian<span className="text-[#B3B8FD] text-lg"> Native</span></p>
          <p className="text-xl">English<span className="text-[#B3B8FD] text-lg"> Upper-Intermediate</span></p>
          <p className="text-xl">Russian<span className="text-[#B3B8FD] text-lg"> Advanced</span></p>

        </div>
      </div>
    </section>
  )
}

export default MyStack