import Title from "../component/title";

const experienceDetail = [
  {
    jobTitle: "Trainee Programmer",
    jobCompany: "Drainage Services Department",
    jobPeriod: "Jul 2020 - Jun 2021",
    jobDuties: [
      "Create clean and user-friendly interfaces with responsive designs",
      "Work with a senior developer to revamp an internal use system",
      "Complete detailed programming and development tasks for frontend and backend",
      "Carry out quality assurance tests to discover errors and optimize usability",
    ],
  },
  {
    jobTitle: "Computer Teacher",
    jobCompany: "AS education",
    jobPeriod: "Jul 2021 - Aug 2021",
    jobDuties: [
      "Teach MIT App Inventor and Scratch",
      "Prepare lesson plans and educate students at all levels",
      "Maintain discipline in class",
    ],
  },
  {
    jobTitle: "College Intern",
    jobCompany: "DXC",
    jobPeriod: "Dec 2021 - Feb 2022",
    jobDuties: ["Prepare Monthly Performance Report", "Drafting Test Cases"],
  },
  {
    jobTitle: "Web Analyst Programmer",
    jobCompany: "Cinchblock",
    jobPeriod: "Feb 2022 - Recent",
    jobDuties: [
      "Design and devlop web applications, web services and respective backend",
      "Testing, documentation. and user training",
      "Assist in ad hoc programming development projects",
    ],
  },
];
const Experience = () => {
  return (
    <div>
      <Title title="Experience" />
      <div>
        {experienceDetail.map((experience) => (
          <div className="py-2">
            <div className="flex flex-row">
              <div className="uppercase font-bold pr-5">
                {experience.jobTitle} - {experience.jobCompany}
              </div>
              <div>{experience.jobPeriod}</div>
            </div>
            <div>
              {experience.jobDuties.map((detail) => (
                <ul className="list-disc list-inside">
                  <li>{detail}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
