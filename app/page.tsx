import Top from "./components/top";
import Service from "./components/service";
import Title from "./components/title";

const Home = () => {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
      <main className="">
        <Top />
        <Title title={"Service"} />
        <Service />
      </main>
    </>
  );
};

export default Home;
