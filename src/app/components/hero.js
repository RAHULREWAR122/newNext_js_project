// import React from "react";
// import Information from "../Pages/Information";

// function Hero() {
//   return (
//     <div className="min-h-[110vh]  overflow-visible w-full bg-[#E2F5FB] flex items-center font-[inter] flex-col p-6 ">
//       <h1 className="text-[#003569] md:text-[150px] tracking-wide font-semibold">
//         Essential Vitamins
//       </h1>

//       <div className="content flex justify-between items-center  w-[80%]">
//         <div className="flex gap-4 flex-col">
//           <p className="text-[gray] text-lg">Online Medical Supplies</p>
//           <p className="text-[#003569] font-semibold  w-[270px] text-3xl">
//             Get Your Vitamins & Minearls
//           </p>
//           <button className="py-3 mt-4 px-4 w-[200px] bg-[#003569] text-[#fff] rounded-full transition-all duration-100 hover:bg-[#003569bd]">
//             EXPLORE
//           </button>
//         </div>
//         <div className="h-[400px] relative  rounded-tl-[120px] rounded-br-[120px] bg-[#FFEEB9] md:w-[400px] ">
//           <img
//             src="./1.png"
//             alt="Medicine Image"
//             className="absolute top-[-100px] left-[-10px]"
//           />
//         </div>
//         <div className="flex flex-col gap-8">
//           <div className="flex gap-4 items-center">
//             <img src="./2__(1).png" alt="" />
//             <div className="flex justify-end mt-4 flex-col ">
//               <h3 className="text-3xl font-semibold text-[#003569]">
//                 Vitamins
//               </h3>
//               <p className="text-[gray]  flex flex-col">
//                 <span>Increased Vitamins and</span>
//                 <span>minerals in your diet</span>
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-4 items-center">
//             <img src="./2__(2).png" alt="" />
//             <div className="flex justify-end mt-4 flex-col ">
//               <h3 className="text-3xl font-semibold text-[#003569]">
//                 Weight Loss
//               </h3>
//               <p className="text-[gray]  flex flex-col">
//                 <span>Weight Loss</span>
//                 <span>Find Scientifically proven Solutions</span>
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-4 items-center">
//             <img src="./2__(3).png" alt="" />
//             <div className="flex justify-end mt-4 flex-col ">
//               <h3 className="text-3xl font-semibold text-[#003569]">
//                 Functional Food{" "}
//               </h3>
//               <p className="text-[gray]  flex flex-col">
//                 <span>Functional Food</span>
//                 <span>From protein powers to baby formula</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Hero;



import React from "react";
import Information from "../Pages/Information";

function Hero() {
  return (
    <div className="min-h-[110vh] overflow-visible w-full bg-[#E2F5FB] flex items-center font-[inter] flex-col p-6">
      <h1 className="text-[#003569] text-[40px] sm:text-[60px] md:text-[150px] tracking-wide font-semibold text-center">
        Essential Vitamins
      </h1>

      <div className="content flex flex-col lg:flex-row justify-between items-center w-full sm:w-[90%] lg:w-[80%] gap-6 lg:gap-0">
        {/* Left Section */}
        <div className="flex gap-4 flex-col text-center lg:text-left items-center lg:items-start">
          <p className="text-[gray] text-base sm:text-lg">Online Medical Supplies</p>
          <p className="text-[#003569] font-semibold w-full sm:w-[270px] text-xl sm:text-2xl lg:text-3xl">
            Get Your Vitamins & Minerals
          </p>
          <button className="py-3 mt-4 px-4 w-[150px] sm:w-[200px] bg-[#003569] text-[#fff] rounded-full transition-all duration-100 hover:bg-[#003569bd]">
            EXPLORE
          </button>
        </div>

        {/* Middle Section */}
        <div className="h-[250px] sm:h-[300px] lg:h-[400px] relative rounded-tl-[60px] sm:rounded-tl-[90px] lg:rounded-tl-[120px] rounded-br-[60px] sm:rounded-br-[90px] lg:rounded-br-[120px] bg-[#FFEEB9] w-[250px] sm:w-[300px] md:w-[400px] mx-auto lg:mx-0">
          <img
            src="./1.png"
            alt="Medicine Image"
            className="absolute top-[-50px] sm:top-[-70px] lg:top-[-100px] left-[-10px]"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {[
            {
              img: "./2__(1).png",
              title: "Vitamins",
              description: ["Increased Vitamins and", "minerals in your diet"],
            },
            {
              img: "./2__(2).png",
              title: "Weight Loss",
              description: [
                "Weight Loss",
                "Find Scientifically proven Solutions",
              ],
            },
            {
              img: "./2__(3).png",
              title: "Functional Food",
              description: [
                "Functional Food",
                "From protein powders to baby formula",
              ],
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img src={item.img} alt={item.title} />
              <div className="flex justify-end mt-4 flex-col">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#003569]">
                  {item.title}
                </h3>
                <p className="text-[gray] flex flex-col text-sm sm:text-base">
                  {item.description.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
