const contactDetail = [
  {
    field: "email",
    value: ["heriacityu@gmail.com"],
  },
  {
    field: "education",
    value: ["City University of Hong Kong", "Bachelor of Computer Science"],
  },
];
const Contact = () => {
  return (
    <div className="flex flex-row bg-slate-500 p-10 justify-between">
      <div>
        <h1 className="text-white font-bold text-6xl">Man Siu Ying</h1>
        <h1 className="text-white font-bold uppercase text-6xl">Heria</h1>
      </div>
      <div>
        {contactDetail.map((contact) => (
          <div className="pb-5">
            <div className="text-white font-bold uppercase">
              {contact.field}:
            </div>
            {contact.value.map((each) => (
              <div className="text-white">{each}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contact;
