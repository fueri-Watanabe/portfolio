import Top from "./components/main/top";
import Service from "./components/main/service";
import BgLayout from "./components/layout/bgLayout";
import WorkFlow from "./components/main/workFlow";
import FAQ from "./components/main/faq";
import Form from "./components/main/contact";
import SectionLayout from "./components/layout/sectionLayout";
import Projects from "./components/main/projects";

const Home = () => {
  return (
    <>
      <main className="" id="top">
        <BgLayout bgClass={"bg-gradient-to-r from-cyan-500 to-blue-500"}>
          <Top />
        </BgLayout>
        <div className="h-20 w-full bg-gradient-to-r from-cyan-500 to-blue-500 [clip-path:polygon(0%_0%,100%_0%,0%_100%)]"></div>
        <SectionLayout secondTitle={"サービス/スキル"} idName="service">
          <Service />
        </SectionLayout>
        <SectionLayout secondTitle={"製作の流れ"} idName="workFlow">
          <WorkFlow />
        </SectionLayout>
        <SectionLayout secondTitle={"よくある質問"} idName="fAQ">
          <FAQ />
        </SectionLayout>
        <SectionLayout secondTitle={"プロジェクト/デモ"} idName="projects">
          <Projects />
        </SectionLayout>
        <SectionLayout secondTitle={""} idName="contact">
          <Form />
        </SectionLayout>
      </main>
    </>
  );
};

export default Home;
