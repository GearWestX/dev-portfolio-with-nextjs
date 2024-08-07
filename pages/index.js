import Head from "next/head";
import {
  AiOutlineMedium,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFileWord

} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import myself from "../public/myselfRedBackground.png";
import code from "../public/code.png";
import WordPress from "../public/wordpress.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import projectDTS from "../public/DTS.png";
import projectFCAM from "../public/FCAM.png";
import project1 from "../public/AldeaGlobal.PNG";
import project2 from "../public/gaggalliance.PNG";
import project3 from "../public/ramac.PNG";
import project4 from "../public/hemco.PNG";
import Bulso from "../public/bulso.png";
import WaxEloquent from "../public/wax-eloquent.png";
import projectMalcolmTravels from "../public/malcolm-travels.png";
import projectMikeys from "../public/mikeys.png";
import projectFarMaker from "../public/ProjectFarMaker.png";
import BodyCrush from "../public/body-crush.png";
import project5 from "/public/roscoebrown-project.png";
import project6 from "/public/tbf-project.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shawlorne's Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/homeIcon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">ShawDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl animate-bounce"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:animate-pulse"
                  href="/Shawlorne West - CV.docx"
                  target="_blank" 
            
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Shawlorne West
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl hover:animate-pulse">
               Web Developer | Hosting Support | Systems Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Outgoing, friendly, and a great communicator with 4 years of experience in WordPress, Full-Stack Development, Web Hosting Support, and Systems Engineering,
            with WordPress contributor experience in Support Forums, Translations, and plugin development.

            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">

             <a 
             className="animate-bounce"
             href="https://medium.com/@maucaulaywest"
             target="_blank" >
             <AiOutlineMedium />
             </a>

             <a 
             className="animate-bounce"
             href="https://profiles.wordpress.org/shawwest/"
             target="_blank" >
             <AiFillFileWord />
             </a>

              <a 
              className="animate-bounce"
              href="https://www.linkedin.com/in/shawlorne-west-297440228/"  
              target="_blank" >
              <AiFillLinkedin />
              </a>
              <a 
               className="animate-bounce"
               href="https://github.com/GearWestX"
               target="_blank" >
              <AiFillGithub />
              </a>
              
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative
                            overflow-hidden mt-20 md:h-96 md:w-96 scale-75">
              <Image 
              className="hover:animate"
              src={myself} layout="fill" objectFit="cover" 
              alt="Shawlorne West" 
              priority />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl animate-bounce">My Services</h3>
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've lead web projects from scratch to production,
              redisigned old-projects, managed hosting providers, security tools, email clients,
              provided customer support with ticketing systems and improved website performance with WPO. 

            </p>
            
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              Additionally, a Software Development background with the following tech 
              <span className="text-teal-500"> Java, Python, Bash Scripting, Python, Node.JS, MySQL, Linux, PHP, MYSQL </span>
              
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image 
              className = "hover:animate-bounce" 
              src={WordPress} width={100} height={100} />
              <h3 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-2xl">
                Front-End
              </h3>
              <p className="py-2">
                Custom themes, builders and frameworks
              </p>

              <div className="hover:animate-pulse">
              <h4 className="py-4 text-teal-600">Skillset</h4>
              <p className="text-gray-800 py-1">WordPress & Woocommerce</p>
              <p className="text-gray-800 py-1">CTPs & ACF</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">JQuery</p>
              <p className="text-gray-800 py-1">Next.JS</p>
              <p className="text-gray-800 py-1">TailWindCSS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Sass</p>
              
              </div>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image 
              className = "hover:animate-bounce" 
              src={code} width={100} height={100} />
              <h3 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-2xl">
                Back-End
              </h3>
              <p className="py-2">
             
              </p>
              <div className="hover:animate-pulse">
              <h4 className="py-4 text-teal-600">Skillset</h4>
              <p className="text-gray-800 py-1">Node.Js</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">PHP, Plugin Development</p>
              <p className="text-gray-800 py-1">GraphQL</p>
              <p className="text-gray-800 py-1">Python: Django, Flask, FastAPI</p>
              
              
              

              </div>



            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image 
              className = "hover:animate-bounce" 
              src={consulting} width={100} height={100} />
              <h3 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-2xl">Infrastructure</h3>
              <p className="py-2">
                Hosting Support
              </p>
              <div className="hover:animate-pulse">
              <h4 className="py-4 text-teal-600">Skillset</h4>
              <p className="text-gray-800 py-1">Linux, Apache, NGINX</p>
              <p className="text-gray-800 py-1">Unix Command-line, WP-CLI, composer, bash scripting, powershell</p>
              <p className="text-gray-800 py-1">WHM, cPanel, MySQL, and Virtuozzo.</p>
              <p className="text-gray-800 py-1">Domains, SSL certificates, DNS Records, WAF, CDNs, SMTP, SFTP, FTP, and cron jobs</p>
            

              </div>

            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">Portfolio Top projects</h3>
            
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
            I have experience building websites with Elementor, Divi, WPBakery, Gutenberg blocks and FSE.
             
            Also, working with custom themes/templates using ACF, CPT, multilingual functionalities, e-commerce, fundraising, and community solutions using WordPress, Woocommerce shops with custom templates, and Plugin Development. 

            </p>
            
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
            Although my primarily work is as a web developer, 
            I also manage from hosting and dev environments to full site deployments, back-ups, server tuning and some DevOps.
                     
            </p>
          
            
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          
          <div className="basis-1/3 flex-1 ">
              <a
              href="https://neweloquent.waxeloquent.com/"
              target="_blank">
               <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={WaxEloquent}
              />    
              </a>
             
            </div>
          
          <div className="basis-1/3 flex-1 ">
              <a
              href="https://digitaltimesavers.com/"
              target="_blank">
               <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={projectDTS}
              />    
              </a>
             
            </div>

            <div className="basis-1/3 flex-1 ">
              <a
              href="https://bodycrushlondon.com/"
              target="_blank">
               <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={BodyCrush}
              />    
              </a>
             
            </div>

            <div className="basis-1/3 flex-1 ">
              <a
              href="https://malcolmtravels.com/"
              target="_blank">
               <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={projectMalcolmTravels}
              />    
              </a>
             
            </div>
            
            
            <div className="basis-1/3 flex-1 ">
              <a
              href="https://mikeybs.com/"
              target="_blank">
               <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={projectMikeys}
              />    
              </a>
             
            </div>

            <div className="basis-1/3 flex-1 ">
              <a
              href="https://fondocentroamericano.org/"
              target="_blank">
               <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={projectFCAM}
              />    
              </a>
             
            </div>
            
            <div className="basis-1/3 flex-1 ">
              <a
              href="https://aglobal.org.ni/"
              target="_blank">
               <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project1}
              />    
              </a>
             
            </div>
            <div className="basis-1/3 flex-1">
              <a 
              href="https://gaggaalliance.org/"
              target="_blank">
              <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
              href="https://www.ramac.com.ni/"
              target="_blank">
                <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project3}
              />
              </a>
              
            </div>

            <div className="basis-1/3 flex-1">
            <a
              href="https://hemco.com.ni/"
              target="_blank">
              <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project4}
              />
  
              </a>
              
             </div>

             <div className="basis-1/3 flex-1">
            <a
              href="https://bulso.waxeloquent.com/"
              target="_blank">
              <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Bulso}
              />
  
              </a>
              
             </div>

             <div className="basis-1/3 flex-1">
            <a
              href="https://tbfoundation.org/"
              target="_blank">
              <Image
                className="rounded-lg object-scale-down hover:animate-pulse"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project6}
              />
  
              </a>
              
             </div>
             
             
        
          </div>
        </section>
      </main>
    </div>
  );
}
