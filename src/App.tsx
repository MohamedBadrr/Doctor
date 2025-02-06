import Header from "./component/shared/Header";
import Home from "./component/Home";
import FAQs from "./component/FAQs";
import Footer from "./component/shared/Footer";
import Services from "./component/Services";
import Number from "./component/Number";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";

export default function App() {
  return (
    <>
      <Header />
      <div id="HOME">
        <Home />
      </div>
      <div id="SERVICES">
        <Services />
      </div>
      <div id="ABOUTUS">
        <AboutUs />
      </div>
      <div id="NUMBER">
        <Number />
      </div>
      <div id="FAQS">
        <FAQs />
      </div>
      <div id="CONTACTUS">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
