import Contact from "../containers/contact";
import Summary from "../containers/summary";
import Skill from "../containers/skill";
import Activities from "../containers/activities";
import Experience from "../containers/experience";

const Home = () => {
  return (
    <div>
      <Contact />
      <div className="px-10">
        <div className="py-5">
          <Summary />
        </div>
        <div className="py-5">
          <Skill />
        </div>
        <div className="py-5">
          <Activities />
        </div>
        <div className="py-5">
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default Home;
