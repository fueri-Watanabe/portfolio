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
      <main id="top">
        <BgLayout
          bgClass={
            "sticky inset-0 h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
          }
        >
          <Top />
        </BgLayout>
        <div className="relative bg-white dark:bg-slate-900">
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
        </div>
      </main>
    </>
  );
};

export default Home;
