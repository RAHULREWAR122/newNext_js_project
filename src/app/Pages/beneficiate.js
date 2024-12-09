"use client";
import React, { useEffect } from "react";

const data = [
  {
    titleText: "Better Ingredients",
    descText:
      "Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!",
    text: "INGREDIENTS",
    img: "",
    width: 36,
  },
  {
    title: "Vitamin C",
    desc: "Vitamin C as ascorbic acid",
    btn: "SEE MORE",
    img: "/01_.png",
    width: 28,
  },
  {
    title: "Vitamin B3",
    desc: "Niacin for healthy gut and skin",
    btn: "SEE MORE",
    img: "/02_.png",
    width: 28,
  },
  {
    title: "Magnesium",
    desc: "Boost energy and support muscle function",
    btn: "SEE MORE",
    img: "/03_.png",
    width: 27,
  },
  {
    title: "Hyaluronic Acid",
    desc: "For smooth, supple and soft skin!",
    btn: "SEE MORE",
    img: "/04_.png",
    width: 27,
  },
  {
    title: "Lactobacillus",
    desc: "Invigorate your gut microbiome",
    btn: "SEE MORE",
    img: "/05_.png",
    width: 27,
  },
  { title: "", desc: "", btn: "", img: "/6thblock.jpeg", width: 10 },
];

function Beneficiate() {
  return (
    <div className="min-h-[70vh] font-[inter] px-6 w-full py-4 flex justify-center items-center flex-wrap gap-6">
      <div
        className={`md:w-[36%] w-[90%]  relative h-[280px] overflow-hidden rounded-xl`}
      >
        <div className="h-full w-full p-3  relative z-20 ">
          <p className="text-[#003569] font-semibold">{data[0]?.titleText}</p>
          <h2 className="text-4xl mt-4 font-bold text-[#003669] ">
            {data[0]?.titleText}
          </h2>
          <p className="text-sm mt-6 text-[gray]">{data[0]?.descText}</p>
        </div>
      </div>

      <div
        className={`md:w-[28%] w-[90%]  relative h-[280px] overflow-hidden rounded-xl`}
      >
        <img
          src={data[1]?.img}
          alt="images"
          className="h-full w-full z-0 absolute"
        />
        <div className="h-full w-full p-3  relative z-20 ">
          <h2 className="mt-4 text-xl text-[#003569] font-semibold px-4">
            {data[1]?.title}
          </h2>
          <p className="mt-4 text-[gray] px-4">{data[1].desc}</p>

          <button className="absolute bottom-6 left-8  border-b-2 border-[#00356981] text-[#003569]">
            {data[1]?.btn}
          </button>
        </div>
      </div>

      <div
        className={`md:w-[28%] w-[90%]  relative h-[280px] overflow-hidden rounded-xl`}
      >
        <img
          src={data[2]?.img}
          alt="images"
          className="h-full w-full z-0 absolute"
        />
        <div className="h-full w-full p-3  relative z-20 ">
          <h2 className=" mt-4 text-xl text-[#003569] font-semibold px-4">
            {data[2]?.title}
          </h2>
          <p className="mt-4 text-[gray] px-4">{data[2].desc}</p>

          <button className="absolute bottom-6 left-8  border-b-2 border-[#00356981] text-[#003569]">
            {data[2]?.btn}
          </button>
        </div>
      </div>

      <div
        className={`md:w-[28%] w-[90%]  relative h-[280px] overflow-hidden rounded-xl`}
      >
        <img
          src={data[3]?.img}
          alt="images"
          className="h-full w-full z-0 absolute"
        />
        <div className="h-full w-full p-3  relative z-20 ">
          <h2 className=" mt-4 text-xl text-[#003569] font-semibold px-4">
            {data[3]?.title}
          </h2>
          <p className="mt-4 text-[gray] px-4">{data[3].desc}</p>

          <button className="absolute bottom-6 left-8  border-b-2 border-[#00356981] text-[#003569]">
            {data[3]?.btn}
          </button>
        </div>
      </div>

      <div
        className={`md:w-[27%] w-[90%]  relative h-[280px] overflow-hidden rounded-xl`}
      >
        <img
          src={data[4]?.img}
          alt="images"
          className="h-full w-full z-0 absolute"
        />
        <div className="h-full w-full p-3  relative z-20 ">
          <h2 className=" mt-4 text-xl text-[#003569] font-semibold px-4">
            {data[4]?.title}
          </h2>
          <p className="mt-4 text-[gray] px-4">{data[4].desc}</p>

          <button className="absolute bottom-6 left-8  border-b-2 border-[#00356981] text-[#003569]">
            {data[4]?.btn}
          </button>
        </div>
      </div>

      <div
        className={`md:w-[27%] w-[90%]  relative h-[280px] overflow-hidden rounded-xl`}
      >
        <img
          src={data[5]?.img}
          alt="images"
          className="h-full w-full z-0 absolute"
        />
        <div className="h-full w-full p-3  relative z-20 ">
          <h2 className="mt-4 text-xl text-[#003569] font-semibold px-4">
            {data[5]?.title}
          </h2>
          <p className="mt-4 text-[gray] px-4">{data[5].desc}</p>

          <button className="absolute bottom-6 left-8  border-b-2 border-[#00356981] text-[#003569]">
            {data[5]?.btn}
          </button>
        </div>
      </div>

      <div
        className={`md:w-[10%] w-[90%] relative h-[280px] overflow-hidden rounded-xl`}
      >
        {data[6] && (
          <div className="h-full w-full">
            <img
              src={data[6]?.img}
              alt=""
              className="h-[100%] w-[100%] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Beneficiate;
