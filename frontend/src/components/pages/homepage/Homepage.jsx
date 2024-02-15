import "../../style.css";
import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";
import Banner from "../../banner/Banner";
import Features from "../../features/Features";

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
