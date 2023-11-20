import Top from "./components/top";
import Service from "./components/service";
import Title from "./components/title";
import BgLayout from "./components/layout/bgLayout";
import Testimonials from "./components/testimonials";
import WorkFlow from "./components/workFlow";
import FAQ from "./components/faq";
import Profile from "./components/profile";
import Form from "./components/form";
import SectionLayout from "./components/layout/sectionLayout";
import Projects from "./components/projects";

const Home = () => {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
      <main className="">
        <BgLayout bgClass={"bg-gradient-to-r from-cyan-500 to-blue-500"}>
          <Top />
        </BgLayout>
        <div className="h-20 w-full bg-gradient-to-r from-cyan-500 to-blue-500 [clip-path:polygon(0%_0%,_100%_0%,_0%_100%)]"></div>
        <SectionLayout title={"Service"} secondTitle={"サービス"}>
          <Service />
        </SectionLayout>
        <BgLayout bgClass={""}>
          <SectionLayout title={"Testimonials"} secondTitle={"お客様の声"}>
            <Testimonials />
          </SectionLayout>
        </BgLayout>
        <SectionLayout title={"WorkFlow"} secondTitle={"作業の流れ"}>
          <WorkFlow />
        </SectionLayout>
        <SectionLayout title={"FAQ"} secondTitle={"よくある質問"}>
          <FAQ />
        </SectionLayout>
        <SectionLayout title={"Projects"} secondTitle={"プロジェクト/デモ"}>
          <Projects />
        </SectionLayout>
        {/* <SectionLayout title={"Profile"} secondTitle={"プロフィール"}>
          <Profile />
        </SectionLayout> */}
        <SectionLayout title={""} secondTitle={""}>
          <Form />
        </SectionLayout>
      </main>
    </>
  );
};

export default Home;
