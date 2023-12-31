const SectionLayout = ({
  children,
  secondTitle,
  idName,
}: {
  children: React.ReactNode;
  secondTitle: string;
  idName: string;
}) => {
  return (
    <section id={idName} className="pt-20 pb-20 px-4 lg:px-0">
      <Title secondTitle={secondTitle} />
      <div className="pt-20">{children}</div>
    </section>
  );
};

const Title = ({ secondTitle }: { secondTitle: string }) => {
  return (
    <div className="container flex gap-5 items-center">
      <div className="flex-none">
        <p className="font-bold text-4xl">{secondTitle}</p>
      </div>
      <div className="w-full border-t"></div>
    </div>
  );
};

export default SectionLayout;
