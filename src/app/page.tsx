import Image from "next/image";
import 'flowbite'; 
import Hero from "./_components/hero";
import AboutCards from "./_components/about-cards";
import Testimonials from "./_components/testimonials";
import Newsletter from "./_components/newsletter"; 

export default function Home() {

  return (
    <body>
        <Hero></Hero>
        <AboutCards></AboutCards>
        <Testimonials></Testimonials>
        <Newsletter></Newsletter>
    </body>
  );
}
