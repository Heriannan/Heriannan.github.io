const Title = (props: { title: string }) => {
  return (
    <div className="border-solid border-b-2 border-b-slate-700 py-2">
      <div className="text-4xl font-bold text-slate-700">{props.title}</div>
    </div>
  );
};
export default Title;
