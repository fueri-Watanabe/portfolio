import Link from "next/link";
const Top = () => {
  return (
    <div className="container flex flex-col justify-center h-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-2 text-4xl lg:text-5xl font-bold duration-300 font-title">
        <p className="lg:text-7xl">
          <ruby>
            fueri
            <rt>フエリ</rt>
          </ruby>
        </p>
        <p className="text-5xl lg:text-8xl text-red-900 hidden lg:block">/</p>
        <p className="text-3xl lg:text-7xl">Hiroshi Watanabe</p>
      </div>
      <div className="flex flex-col md:flex-row justify-end lg:justify-between items-center w-full px-8 lg:px-0">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-16 pt-6 lg:pt-0 text-center">
          <button className="text-2xl lg:text-6xl cursor-default font-bold hover:font-normal duration-300 focus:font-normal">
            <p>Web Developer</p>
          </button>
          <div className="flex flex-col text-center gap-2 w-full lg:text-start text-lg lg:text-2xl">
            <p className="flex flex-col lg:flex-row">
              <span>Webアプリケーション開発</span>
              <span className="hidden lg:block">、</span>
              <span>業務システム開発</span>
            </p>
            <p className="flex flex-col lg:flex-row">
              <span>ビジネスを支え</span>
              <span>イメージを形にします</span>
              <span className="hidden lg:block">。</span>
            </p>
          </div>
          <Link
            href={"#service"}
            className="w-fit custom-button hover:scale-110 duration-300"
          >
            <p className="text-lg p-1">サービスを見る</p>
          </Link>
        </div>
        <div className="md:flex justify-center items-center hidden lg:w-[576px] lg:h-[576px]">
          <video autoPlay loop muted playsInline poster="/working.webp">
            <source src="/animation/working.webm" type="video/webm" />
            <source src="/animation/working.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
export default Top;
