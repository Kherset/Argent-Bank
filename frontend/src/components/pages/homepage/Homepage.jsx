import Banner from "../../banner/Banner";
import Features from "../../features/Features";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import "../../style.css";

function Home() {
  return (
    <div className="homepage">
      <Nav />
      <Banner />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
