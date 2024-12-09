import React from "react";

const data = [
  {
    title: "clinically studied",
    desc: " All products that we offer have undergone lab and safety tests",
    img: "/Group1.png",
  },
  {
    title: "Vegetarian Friendly",
    desc: "We have a wide selection of vegetarian products to meet your needs",
    img: "/Group2.png",
  },
  {
    title: "Made In India",
    desc: "Shop local and explore health products made right here in India",
    img: "/Group3.png",
  },
  {
    title: "Free Shipping",
    desc: "We deliver to your door with no shipping costs on your orders",
    img: "/Group4.png",
  },
  {
    title: "No Risk",
    desc: "We ensure that all products are safe and within their use-by date",
    img: "/Group5.png",
  },
  {
    title: "GMO Free",
    desc: "Natural, no modified products and derivatives for those who need it",
    img: "/Group6.png",
  },
];

function Information() {
  return (
    <div className="w-full min-h-screen md:mt-0 mt-16  md:min-h-[400px] flex justify-center items-center relative">
      <div className="bg-[#003569] w-[90%] sm:w-[80%] md:gap-y-12 gap-y-20 md:min-h-[470px]  rounded-3xl md:absolute md:top-[-120px] top-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="mt-[-60px] sm:mt-[-80px] lg:mt-[-120px] flex text-[#fff] gap-3 font-[inter] flex-col justify-center items-center"
            >
              <div className="h-[80px] sm:h-[100px] flex justify-center items-center bg-[#fff] w-[80px] sm:w-[100px] border rounded-full">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base w-[80%] text-center">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Information;
