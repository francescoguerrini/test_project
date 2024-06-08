import Navbar from "./components/navbar/Navbar";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Blog from "./components/blog/Blog";
import Section3 from "./components/section3/Section3";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <Section1 />
      </div>
      <div className="">
        <Section2 />
      </div>
      <div className="">
        <Blog />
      </div>
      <div className="">
        <Section3 />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
