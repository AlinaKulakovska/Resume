import { FaBootstrap, FaCss3, FaFigma, FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { IoIosClose, IoIosRemove, IoLogoJavascript, IoMdBrowsers } from "react-icons/io";
import React from "react";

function MyStack() {
  


    return (
        <section className="text-slate-600 dark:text-gray-300">
        <div className="border-2 text-2xl border-slate-600 p-2  flex justify-end dark:border-gray-300 ">
          <IoIosRemove />
          <IoMdBrowsers className="ml-2" />
          <IoIosClose className="ml-2" />
        </div>
        <div className="border-2 border-t-0 border-slate-600   dark:border-gray-300 w-100 flex flex-col md:flex-row">
          <div className="w-full bg-[rgba(157,158,165,0.3)] p-4 md:w-1/3">
            <h2 className="text-xl font-bold text-center mb-5">
              Programming tools I use
              </h2>
            <div className="flex items-center">
            <FaHtml5  className="text-3xl mr-2"/>
            <div className="w-full text-right">
              <h6>HTML</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class=" w-[80%] flex flex-col justify-center overflow-hidden bg-[#B3B8FD]  text-center"></div>
              </div>
            </div>
            </div>
            {/*  */}
            <div className="flex items-center">
            <FaCss3  className="text-3xl mr-2"/>
            <div className="w-full text-right">
              <h6>CSS</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class=" w-[80%] flex flex-col justify-center overflow-hidden bg-[#B3B8FD]  text-center"></div>
              </div>
            </div>
            </div>
                {/*  */}
                <div className="flex items-center">
            <IoLogoJavascript  className="text-3xl mr-2"/>
            <div className="w-full text-right">
              <h6>JavaScript</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class=" w-[60%] flex flex-col justify-center overflow-hidden bg-[#B3B8FD]  text-center"></div>
              </div>
            </div>
            </div>
            <div className="flex items-center">
            <FaBootstrap   className="text-3xl mr-2"/>
            <div className="w-full text-right">
              <h6>Bootstrap</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class=" w-[75%] flex flex-col justify-center overflow-hidden bg-[#B3B8FD]  text-center"></div>
              </div>
            </div>
            </div>
                {/*  */}
                <div className="flex items-center">
            <FaFigma  className="text-3xl mr-2"/>
            <div className="w-full text-right">
              <h6>Figma</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class=" w-[55%] flex flex-col justify-center overflow-hidden bg-[#B3B8FD]  text-center"></div>
              </div>
            </div>
            </div>
                {/*  */}
                <div className="flex items-center">
            <FaReact  className="text-3xl mr-2"/>
            <div className="w-full text-right">
              <h6>React</h6>
              <div class="flex w-full h-4 bg-gray-200 border-2 border-slate-600 dark:border-gray-300  placeholder:backdrop: rounded-none overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class=" w-[35%] flex flex-col justify-center overflow-hidden bg-[#B3B8FD]  text-center"></div>
              </div>
            </div>
            </div>
                {/*  */}
                
            <div className="flex items-center">
            <FaGit   className="text-3xl mr-2"/> 
            </div>
          </div>


          <div className="w-full p-2 md:w-2/3">2</div>

        </div>
      </section>
    )
}

export default MyStack