import Top from "./components/main/top";
import Service from "./components/main/service";
import WorkFlow from "./components/main/workFlow";
import FAQ from "./components/main/faq";
import Form from "./components/main/contact";
import SectionLayout from "./components/layout/sectionLayout";
import Projects from "./components/main/projects";

const Home = () => {
  return (
    <>
      <main id="top">
        <div className="sticky inset-0 h-screen w-full dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <Top />
        </div>
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
