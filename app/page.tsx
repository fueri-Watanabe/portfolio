import Top from "./components/main/top";
import Service from "./components/main/service";
import Title from "./components/title";
import BgLayout from "./components/layout/bgLayout";
import Testimonials from "./components/main/testimonials";
import WorkFlow from "./components/main/workFlow";
import FAQ from "./components/main/faq";
import Profile from "./components/main/profile";
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
        <SectionLayout
          title={"Service"}
          secondTitle={"サービス"}
          idName="service"
        >
          <Service />
        </SectionLayout>
        {/* <BgLayout bgClass={""}>
          <SectionLayout title={"Testimonials"} secondTitle={"お客様の声"}  idName="testimonials">
            <Testimonials />
          </SectionLayout>
        </BgLayout> */}
        <SectionLayout
          title={"WorkFlow"}
          secondTitle={"製作の流れ"}
          idName="workFlow"
        >
          <WorkFlow />
        </SectionLayout>
        <SectionLayout title={"FAQ"} secondTitle={"よくある質問"} idName="fAQ">
          <FAQ />
        </SectionLayout>
        <SectionLayout
          title={"Projects"}
          secondTitle={"プロジェクト/デモ"}
          idName="projects"
        >
          <Projects />
        </SectionLayout>
        {/* <SectionLayout title={"Profile"} secondTitle={"プロフィール"} idName="profile">
          <Profile />
        </SectionLayout> */}
        <SectionLayout title={""} secondTitle={""} idName="contact">
          <Form />
        </SectionLayout>
      </main>
    </>
  );
};

export default Home;
