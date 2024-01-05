import { About2 } from "./Components/About2";
import Contact from "./Components/Contact";

import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import GitHubCalendar from "react-github-calendar";
import { GitStats } from "./Components/GitStats";
import { Footer } from "./Components/Footer";
import Tools from "./Components/Tools";
import ProjectContainer from "./Components/ProjectComp";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About2 />
      <Skills />
      <Tools />

      <ProjectContainer />
      <GitStats />
      <div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
