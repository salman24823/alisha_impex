import Aboutsection from "./Sections/Aboutsection/page";
import Form from "./Sections/Form/page";
import Herosection from "./Sections/Herosection/page";
import Locationsection from "./Sections/Locationsection/page";
import Partnersection from "./Sections/Partnersection/page";
import Productsection from "./Sections/Productssection/page";
import Servicessection from "./Sections/Servicessection/page";

export default function Home() {
  return (
   <div className="">
    <Herosection />    
    <Aboutsection />
    <Servicessection />
    <Productsection />
    <Partnersection />
    <Form />
    <Locationsection />
   </div>
  );
}
