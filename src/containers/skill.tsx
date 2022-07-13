import Title from "../component/title";

const skillSet = [
  {
    skillTitle: "Frontend Development",
    skillDetail: "HTML, CSS, JavaScript, ReactJS",
  },
  {
    skillTitle: "Backend Development",
    skillDetail: "Python, Java, C++, MSSQL",
  },
  {
    skillTitle: "UI/UX Design",
    skillDetail: "Bootstrap Studio, Adobe XD",
  },
  {
    skillTitle: "Media Contenr Creation",
    skillDetail: "Canva, Pixlr, Photoshop, Premiere Pro",
  },
  {
    skillTitle: "PDF Programming",
    skillDetail: "",
  },
  {
    skillTitle: "Document Peparation",
    skillDetail: "End User Manual, Writing Test Cases",
  },
  {
    skillTitle: "Natural Language Processing",
    skillDetail:
      "Multi-class Classification, Extraction Based Question Answering",
  },
];

const Skill = () => {
  return (
    <div>
      <Title title="Skill Highlights" />
      <div>
        {skillSet.map((skill) => (
          <div>
            <ul className="list-disc list-inside">
              <li>{skill.skillTitle}</li>
              <ul className="list-none">
                <p>e.g. {skill.skillDetail}</p>
              </ul>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
