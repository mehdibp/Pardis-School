import Header     from "./components/Header";
import About      from "./components/About";
import Stats      from "./components/Statistics";
import Curriculum from "./components/Curriculum";
import Teachers   from "./components/Teachers";
import News       from "./components/News";
import Gallery    from "./components/Gallery";

import Footer    from "./components/Footer";
import NavBar     from "../../components/layout/NavBar";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}

      <Header />
      <About />
      <Stats />
      <Curriculum />
      <Teachers />
      <News />
      <Gallery />

      {/* <Footer /> */}
    </>
  );
}