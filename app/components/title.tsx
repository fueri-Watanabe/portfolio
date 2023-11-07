const Title = ({ title }: { title: string }) => {
  return (
    <>
      <div className="w-full border-t my-6"></div>
      <div className="p-2 text-2xl">
        <p>{title}</p>
      </div>
    </>
  );
};
export default Title;
