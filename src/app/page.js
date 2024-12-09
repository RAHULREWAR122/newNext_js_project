import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Information from "./Pages/Information";
import Beneficiate from "./Pages/beneficiate";
import Blogs from "./Pages/Blogs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Information/>
       <Beneficiate/>
       <Blogs/>
       <Footer/>

    </>
  );
}
