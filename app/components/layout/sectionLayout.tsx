const SectionLayout = ({
  children,
  title,
  secondTitle,
  idName,
}: {
  children: React.ReactNode;
  title: string;
  secondTitle: string;
  idName: string;
}) => {
  return (
    <section id={idName} className="pt-20 pb-32">
      <Title title={title} secondTitle={secondTitle} />
      <div className="pt-20">{children}</div>
    </section>
  );
};

const Title = ({
  title,
  secondTitle,
}: {
  title: string;
  secondTitle: string;
}) => {
  return (
    <div className="container flex gap-5 items-center">
      {/* <div className="flex flex-col justify-center items-center gap-2 p-2 my-10"> */}
      <div className="flex-none">
        <p className="font-bold text-4xl text-cyan-500">{secondTitle}</p>
      </div>
      {/* <p className="text-xl">{title}</p> */}
      {/* </div> */}
      <div className="w-full border-t"></div>
    </div>
  );
};

export default SectionLayout;
