// import React, { useState, useEffect } from 'react';

// import Footer from './Footer'
// import Header from './Header'
// import { AiOutlineFilePdf } from "react-icons/ai";
// import { FaUserPlus } from "react-icons/fa6";
// import { FaReact } from "react-icons/fa";



// const Dot = ({ x, y, opacity }) => (
//   <div
//     className="absolute rounded-full cursor-pointer"
//     style={{
//       width: '2px',
//       height: '2px',
//       top: `${y}px`,
//       left: `${x}px`,
//       backgroundColor: `rgba(255, 255, 255, ${opacity})`,
//     }}
//   />
// );

// export default function About() {
//   const [dots, setDots] = useState([]);
//   const [backgroundWidth, setBackgroundWidth] = useState(window.innerWidth);
//   const backgroundHeight = 1500;


//   useEffect(() => {
//     const handleResize = () => {
//       setBackgroundWidth(window.innerWidth);

//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const numberOfDots = 200;


//   useEffect(() => {
//     const newDots = Array.from({ length: numberOfDots }, (_, index) => ({
//       x: Math.random() * backgroundWidth,
//       y: Math.random() * backgroundHeight,
//       index,
//       opacity: Math.random() * 0.3 + 0.3,
//     }));
//     setDots(newDots);
//   }, [backgroundWidth, backgroundHeight, numberOfDots]);

//   const minDistanceBetweenDots = 40;

//   const handleBackgroundClick = (e) => {
//     const clickX = e.clientX - e.target.getBoundingClientRect().left;
//     const clickY = e.clientY - e.target.getBoundingClientRect().top;

//     const isTooClose = dots.some((dot) => {
//       const distance = Math.sqrt((dot.x - clickX) ** 2 + (dot.y - clickY) ** 2);
//       return distance < minDistanceBetweenDots;
//     });

//     if (!isTooClose) {
//       const newDot = {
//         x: clickX,
//         y: clickY,
//         opacity: Math.random() * 0.5 + 0.1,
//       };

//       setDots([...dots, newDot]);
//     }
//   };


//   return (
//     <>
//       <Header />
//       {dots.map((dot, index) => (
//         <Dot key={index} x={dot.x} y={dot.y} opacity={dot.opacity} />
//       ))}
//       <div className='sm:mt-20 mt-10 bg-black h-full '>

//         <div class="flex sm:flex-row flex-col mb-4 sm:ms-44 ms-12 ">
//           <div class="sm:w-full mt-20 ">
//             <p className='text-white text-5xl flex font-bold'>Know Who <span className='ms-3 text-pink-500'>I'M</span></p>
//             <p className='text-white sm:text-2xl text-xl font-bold mt-8'>Hello, my name is <span className='text-pink-500'>Twisha Solanki</span> and I am a dedicated Frontend developer and freelancer. Currently, I am in my 4th semester pursuing a MSC.IT degree at Atmiya University.</p>
//             <p className='text-white sm:text-2xl text-xl font-bold mt-7'>During my academic journey, I have successfully completed several projects utilizing the Frontend and React.js. Furthermore, I gained invaluable practical experience through a rigorous 6-month internship at Imbuesoft LLP, where I immersed myself in various facets of the MERN stack, including proficiency in tools such as Postman, Git, and GitHub. My experience extends to working with three prominent CSS frameworks, namely Ant Design, Bootstrap, and Tailwind CSS.</p>
//             <p className='text-white sm:text-2xl text-xl font-bold mt-7'>I take pride in my ability to craft and design intricate components, alongside my proficiency in developing APIs. As a result of my experiences and learning, I am now fully prepared and eager to contribute my skills and knowledge to a full-time position.
//             </p>
//             <div className='flex'>
//               <button type='submit' className='bg-pink-500 rounded-md p-3 w-56 font-bold text-white mt-8 sm:ms-44 flex'><AiOutlineFilePdf className='ms-12 mt-1' /><span className='ms-2'>Resume</span></button>
//               <a href='https://in.linkedin.com/in/twisha-solanki-982326227?trk=public_profile_browsemap' type='submit' className='bg-green-500 rounded-md p-3 w-56 font-bold text-white mt-8  ms-5 flex '><FaUserPlus className='ms-12 mt-1' /><span className='ms-2'>Hire Me</span></a>
//             </div>


//           </div>
//           <div class="sm:w-1/2 h-full mt-24 sm:ms-24 ms-0">
//           <div className=" overflow-hidden bg-cover bg-no-repeat">
//             <img src='/assets/images/atmiya.png' className='w-80 sm:mb-0 mb-5 text-center max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-2xl container mx-auto sm:mt-5 mt-12 shadow-lg ' />
//           </div>
//           </div>


//         </div>
//         <p className='font-bold text-5xl text-white p-24 text-center'>Professional <span className='text-pink-500'>Skillset</span></p>

//         <div className='border border-pink-500 w-56 h-40 shadow:lg  hover:text-gray-50 rounded-lg '>
//           <FaReact className='text-white w-32 h-28 mt-6 ms-10 text-center ' />
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaUserPlus, FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiAntdesign } from "react-icons/si";




const Dot = ({ x, y, opacity }) => (
  <div
    className="absolute rounded-full cursor-pointer"
    style={{
      width: '2px',
      height: '2px',
      top: `${y}px`,
      left: `${x}px`,
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    }}
  />
);



export default function About() {

  const [dots, setDots] = useState([]);
  const [backgroundWidth, setBackgroundWidth] = useState(window.innerWidth);
  const backgroundHeight = 1500;


  useEffect(() => {
    const handleResize = () => {
      setBackgroundWidth(window.innerWidth);

    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numberOfDots = 200;


  useEffect(() => {
    const newDots = Array.from({ length: numberOfDots }, (_, index) => ({
      x: Math.random() * backgroundWidth,
      y: Math.random() * backgroundHeight,
      index,
      opacity: Math.random() * 0.3 + 0.3,
    }));
    setDots(newDots);
  }, [backgroundWidth, backgroundHeight, numberOfDots]);

  const minDistanceBetweenDots = 40;

  const handleBackgroundClick = (e) => {
    const clickX = e.clientX - e.target.getBoundingClientRect().left;
    const clickY = e.clientY - e.target.getBoundingClientRect().top;

    const isTooClose = dots.some((dot) => {
      const distance = Math.sqrt((dot.x - clickX) ** 2 + (dot.y - clickY) ** 2);
      return distance < minDistanceBetweenDots;
    });

    if (!isTooClose) {
      const newDot = {
        x: clickX,
        y: clickY,
        opacity: Math.random() * 0.5 + 0.1,
      };

      setDots([...dots, newDot]);
    }
  };
  return (
    <>
      <div className='bg-black h-fit   text-white ' style={{ backgroundImage: "url('assets/image.jpg", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} onClick={handleBackgroundClick}>
        <Header />

        {dots.map((dot, index) => (
          <Dot key={index} x={dot.x} y={dot.y} opacity={dot.opacity} />
        ))}
        <div className='sm:mt-20 mt-10 sm:p-32 p-16'>
          <div className="flex sm:flex-row flex-col mb-4">
            <div className="sm:w-1/2 flex justify-center  ">
              <img
                src="assets/images/t1.jpeg"
                className=" w-[60%]  hover:shadow-pink-500 hover:shadow-xl transition duration-300 hover:scale-110 rounded-2xl container mx-auto sm:mt-5 mt-12 shadow-lg"
                alt="Twisha"
              />
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10">
              <p className='sm:text-5xl text-4xl text-center sm:mt-0 mt-5 font-serif'>Know Who <span className='text-pink-500 font-bold'>I'M</span></p>
              <p className='mt-10 sm:text-[25px] text-xl'>Hello, my name is <span className='text-pink-500 font-bold'> Twisha Solanki</span> and I am a dedicated Front - End developer. Currently, I am in my 4th semester pursuing a Msc-IT degree at Atmiya University.</p>
              <p className='mt-10 sm:text-[25px] text-xl'>Throughout my academic endeavors, I've adeptly executed numerous projects leveraging  Next.JS and React.JS, showcasing proficiency in Git and GitHub. Additionally, I've honed my skills working with four prominent CSS frameworks—Ant Design, Bootstrap, Tailwind CSS, and Daisy UI.</p>
              <div className='flex mt-10'>
                <a href='https://drive.google.com/file/d/1Nq_1idGoWbIf7UkpBZTz1z8D1lEa4Ol-/view' type='submit' className='bg-pink-500 rounded-md p-3 w-56 font-bold text-white mt-8 sm:ms-44 flex justify-center '><AiOutlineFilePdf className=' mt-1' /><span className='ms-2 '>Resume</span></a>
                <a href='https://in.linkedin.com/in/twisha-solanki-982326227?trk=public_profile_browsemap' type='submit' className='bg-green-500 rounded-md p-3 w-56 font-bold text-white mt-8 ms-5 justify-center   flex '><FaUserPlus className='flex  mt-1' /><span className='ms-2'>Hire Me</span></a>
              </div>

            </div>
          </div>
        </div>

        <p className='font-bold text-5xl text-white sm:p-24 text-center'>Professional <span className='text-pink-500'>Skillset</span></p>
        <div className='container mx-auto '>
          <div className='flex justify-center sm:flex-row flex-col  sm:ms-0 ms-36'>
            <div className='border shadow-pink-500 sm:mt-0 mt-10 shadow-lg hover:shadow-pink-500 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-pink-500 sm:w-56  w-80  h-40 shadow:lg  hover:text-gray-50 rounded-lg '>
              <FaReact className='text-white sm:w-28 sm:h-20 w-32 h-32 sm:mt-9 sm:p-0 p-5 sm:ms-14 mt-5 ms-28 text-center ' />
            </div>
            <div className='border shadow-pink-500 sm:mt-0 mt-10  shadow-lg sm:ms-24 hover:shadow-pink-500 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-pink-500 sm:w-56  w-80  h-40 shadow:lg  hover:text-gray-50 rounded-lg '>
              <TbBrandNextjs className='text-white sm:w-28 sm:h-20 w-32 h-32 sm:mt-9 sm:p-0 p-5 sm:ms-14 mt-5 ms-28 text-center ' />
            </div>
            <div className='border shadow-pink-500 sm:mt-0 mt-10  shadow-lg sm:ms-24 hover:shadow-pink-500 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-pink-500 sm:w-56  w-80  h-40 shadow:lg  hover:text-gray-50 rounded-lg '>
              <SiTailwindcss className='text-white sm:w-28 sm:h-20 w-32 h-32 sm:mt-9 sm:p-0 p-5 sm:ms-14 mt-5 ms-28 text-center ' />
            </div>
            <div className='border shadow-pink-500 sm:mt-0 mt-10  shadow-lg sm:ms-24 hover:shadow-pink-500 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-pink-500 sm:w-56  w-80  h-40 shadow:lg  hover:text-gray-50 rounded-lg '>
              <FaBootstrap className='text-white sm:w-28 sm:h-20 w-32 h-32 sm:mt-9 sm:p-0 p-5 sm:ms-14 mt-5 ms-28 text-center ' />
            </div>
          </div>

          <div className='flex justify-center sm:flex-row flex-col  sm:mt-16 sm:ms-0 ms-36 mb-14'>
            <div className='border shadow-pink-500 sm:mt-0 mt-10  shadow-lg sm:ms-0 hover:shadow-pink-500 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-pink-500 sm:w-56  w-80  h-40 shadow:lg  hover:text-gray-50 rounded-lg '>
              <img src='assets/images/daisyUI-removebg-preview.png' className='text-white sm:w-24 sm:h-20 w-32 h-32 sm:mt-9 sm:p-0 p-5 sm:ms-14 mt-5 ms-28 text-center ' />
            </div>
            <div className='border shadow-pink-500 sm:mt-0 mt-10  shadow-lg sm:ms-24 hover:shadow-pink-500 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-pink-500 sm:w-56  w-80  h-40 shadow:lg  hover:text-gray-50 rounded-lg '>
              <SiAntdesign className='text-white sm:w-28 sm:h-20 w-32 h-32 sm:mt-9 sm:p-0 p-5 sm:ms-14 mt-5 ms-28 text-center ' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
