import "./../assets/css/page2/page2.css";
import HeroPage2 from "../components/HeroPage2";
import Singnature from "../components/Singnature";
import Overview from "../components/Overview";
import Chanllenge from "../components/Chanllenge";
import Tag from "../components/Tag";
import PortCarousel from "../components/PortCarousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Page2 = () => {
  return (
    <div className="page2">
      <HeroPage2 />
      <Singnature />
      <Overview />
      <Chanllenge />
      <Tag />
      <PortCarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page2;
