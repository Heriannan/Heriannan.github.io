import Title from "../component/title";

const activitiesDetail = [
  {
    year: 2019,
    name: "University Volunteering Mentor",
    detail: "Computer Science Orientation Camp",
  },
  {
    year: 2020,
    name: "SpaceApps Hong Kong 2020",
    detail: "Awarded Best Use of Technology",
  },
  {
    year: 2021,
    name: "“Post to Compete”",
    detail: "Social Media Advocacy Challenge 2021",
  },
  {
    year: 2021,
    name: "Student Mentor of Computer Science Department",
    detail: "",
  },
];
const Activities = () => {
  return (
    <div>
      <Title title="Extra-curricular Activities" />
      <div>
        {activitiesDetail.map((activity) => (
          <div className="flex">
            <div className="pr-7">
              <span>{activity.year}</span>
            </div>
            <ul className="list-disc">
              <li>{activity.name}</li>
              <ul className="list-none">
                <li>{activity.detail}</li>
              </ul>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Activities;
