import React from "react";

const data = [
  [
    {
      text: "The Covid-19 Epidemic In 2022 Is Back",
      date: "20 APR",
      img: "/blog_1.png",
      height: 270,
    },
    {
      text: "The Covid-19 Epidemic In 2023 Is Back",
      date: "20 APR",
      img: "/blog_5.png",
      height: 140,
    },
  ],
  [
    {
      text: "The Covid-19 Epidemic In 2022 Is Back",
      date: "20 APR",
      img: "/blog_2.png",
      height: 140,
    },
    {
      text: "Hac hendrerit mus nons semper suspendisse",
      //   date: "17 MAR",
      img: "/blog_6.png",
      height: 270,
    },
  ],

  [
    {
      text: "The Covid-19 Epidemic In 2022 Is Back",
      date: "20 APR",
      img: "/blog_1.png",
      height: 270,
    },
    {
      text: "The Covid-19 Epidemic In 2023 Is Back",
      date: "20 APR",
      img: "/blog_6.png",
      height: 140,
    },
  ],

  [
    {
      text: "The Covid-19 Epidemic In 2022 Is Back",
      date: "20 APR",
      img: "/blog_4.png",
      height: 140,
    },
    {
      text: "Hac hendrerit mus nons semper suspendisse",
      date: "17 MAR",
      img: "/blog_6.png",
      height: 270,
    },
  ],
];

function Blogs() {
  return (<>
      <div className="w-full font-[inter] mt-20 text-center">
      <h2 className="text-[#003569]  font-semibold text-lg">OUR BLOGS</h2>
   <h3 className="text-[#003569] font-semibold text-4xl tracking-[3px] mt-2">Latest News</h3>  
      </div>
    <div className="min-h-screen  w-full gap-y-6  grid md:grid-cols-4 p-6">  
      {data.map((item, i) => {
        return (
          <div key={i} className="h-[660px] md:w-[400px] w-full flex flex-col justify-around  gap-4">
            {item.map((myData, index) => {
              return (
                <div
                  key={index}
                  style={{
                    height: `${myData.height}%`,
                  }}
                  className="w-full  rounded-lg relative overflow-hidden"
                >
                  <div className="h-full px-3 w-full z-0 absolute top-0 left-0">
                    <img
                      src={myData.img}
                      alt=""
                      className="h-full rounded-lg  w-full object-cover"
                    />
                  </div>

                  <div className="z-10 relative  h-full w-full">
                    {myData?.date && (
                      <p className="bg-[#003569] px-6 py-2 w-[120px] mt-5 text-white text-lg font-semibold rounded-tr-full rounded-br-full">
                        {myData?.date}
                      </p>
                    )}
                    <h3 className="text-white font-semibold text-xl mt-4 ml-4 px-8">
                      {myData?.text}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    </>);
}

export default Blogs;
