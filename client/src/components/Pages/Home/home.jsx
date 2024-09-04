import LandingPage from "./LandingPage";
import Steps from "./Steps";
import LangSupport from "./LangSupport";
import Footer from "../../Layout/Footer";

const Home = () => {
  return (
    <div data-theme="light">
      <LandingPage />
      <Steps />
      <LangSupport />
      <Footer />
    </div>
  );
};

export default Home;
