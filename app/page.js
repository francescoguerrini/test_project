import Navbar from "./components/navbar/Navbar";
import Section1 from "./components/section1/Section1";
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
        <Footer />
      </div>
    </div>
  );
}
