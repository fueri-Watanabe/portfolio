import { IconSauce } from "../../_const/iconSauce";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftRightIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";

const strengths = {
  one: {
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
    title: "レスポンスの早さ",
    text: "お客様の要望に対して持ち帰ることなく返答出来ます。",
  },
  two: {
    icon: <UsersIcon className="h-8 w-8" />,
    title: "コスパの良さ",
    text: "人件費を抑える事が出来ますので、同じ規模の案件でも他よりもお求めやすくご提供します。",
  },
  three: {
    icon: <ClipboardDocumentCheckIcon className="h-8 w-8" />,
    title: "解像度の高さ",
    text: "要望を聞いた本人が全ての業務を行うので、要望からのズレが起きません。",
  },
};

const serviceContents = [
  "Webサイト",
  "業務系Webサービス",
  "DB管理型Webアプリケーション構築",
  "既存サイト・システム修正/管理",
  "Googleアプリ連携",
];

const Service = () => {
  return (
    <div className="container flex flex-col gap-32">
      <div className="max-w-sm lg:max-w-full mx-auto flex flex-col gap-14">
        <div className="flex lg:flex-row flex-col justify-center items-center text-center text-3xl lg:text-4xl gap-2">
          <span>フルスタックエンジニア</span>
          <span>3つの特徴</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-10 lg:h-auto">
          {Object.values(strengths).map((value, index) => {
            return (
              <div
                key={index}
                className="h-44 flex flex-col basis-1/3 rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5"
              >
                <div className="h-44 p-6 flex flex-col justify-between gap-5 rounded-xl bg-white dark:bg-slate-900 hover:dark:bg-white hover:shadow-xl hover:dark:text-slate-900 transition select-none">
                  <div className="flex flex-row items-center gap-6">
                    <div>{value.icon}</div>
                    <div className="text-xl font-semibold">{value.title}</div>
                  </div>
                  <div className="basis-3/5">{value.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 lg:h-auto">
        <div className="flex flex-col justify-between gap-8 lg:w-1/2 h-full">
          <p className="text-3xl">Webアプリケーション開発</p>
          <ul className="flex flex-col gap-3 text-xl">
            {serviceContents.map((value, index) => {
              return (
                <li key={index} className="flex items-center gap-1">
                  <CodeBracketSquareIcon className="h-6 w-6" />
                  <p>{value}</p>
                </li>
              );
            })}
          </ul>
          <p>
            社内システム・個人ツールの作成、あらゆる業務をサポート致します。
          </p>
        </div>
        <div className="p-2 w-full lg:w-5/12">
          <div className="flex flex-col gap-3">
            {Object.values(IconSauce).map((iconSauceValue, index) => {
              return (
                <div key={index}>
                  <p className="text-xl font-semibold">
                    {iconSauceValue.title}
                  </p>
                  <Marquee
                    pauseOnClick
                    gradient
                    gradientColor="hsl(var(--widget))"
                    direction={index % 2 ? "right" : "left"}
                  >
                    {Object.values(iconSauceValue.icon).map((value) => {
                      return <IconBox key={value.iconName} icon={value} />;
                    })}
                  </Marquee>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const IconBox = ({
  icon,
}: {
  icon: {
    iconName: string;
    svg: JSX.Element;
    display: boolean;
  };
}) => {
  const { iconName, svg, display } = icon;
  return (
    <>
      {display && (
        <div className="relative flex flex-col items-center p-1 lg:p-3">
          <div className="p-2">{svg}</div>
          <p className="text-xs select-none">{iconName}</p>
        </div>
      )}
    </>
  );
};

export default Service;
