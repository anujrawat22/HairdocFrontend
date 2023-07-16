import CaptionCarousel from "../Components/Carousal";
import SplitWithImage from "../Components/category";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

function Home() {
  console.log(useSelector((state) => console.log(state.cart)));
  return (
    <div>
      <Navbar />
      <CaptionCarousel />
      <SplitWithImage />
      <Footer />
    </div>
  );
}

export default Home;
