import Link from "next/link";
const Top = () => {
  return (
    <div className="container flex h-full">
      <div className="flex flex-col md:flex-row justify-end lg:justify-center items-center w-full px-8 lg:px-0">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-16 text-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-2 text-4xl lg:text-5xl font-bold text-white dark:text-slate-800 duration-300">
            <p className="text-5xl">
              <ruby>
                fueri
                <rt>フエリ</rt>
              </ruby>
            </p>
            <p className="text-5xl lg:text-6xl hidden lg:block">/</p>
            <p className="text-3xl lg:text-5xl">Hiroshi Watanabe</p>
          </div>
          <button className="text-4xl lg:text-5xl cursor-default font-bold hover:font-normal duration-300 focus:font-normal">
            <p className="text-white dark:text-slate-800">Web Developer</p>
          </button>
          <Link
            href={"#service"}
            className="w-fit custom-button hover:scale-110 duration-300"
          >
            <p className="text-lg p-1">サービスを見る</p>
          </Link>
        </div>
        <div className="flex justify-center items-center lg:w-[576px] lg:h-[576px]">
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
