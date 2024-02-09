import Image from "next/image";
import { IconSauce } from "../../_const/iconSauce";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftRightIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

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
      <div className="flex flex-col gap-14">
        <div className="flex justify-center items-center">
          <p className="text-center text-3xl lg:text-4xl">
            フルスタックエンジニア 3つの特徴
          </p>
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
        <div className="p-2">
          <div className="flex flex-col gap-3">
            {Object.values(IconSauce).map((iconSauceValue, index) => {
              return (
                <div key={index}>
                  <p className="text-2xl font-semibold">
                    {iconSauceValue.title}
                  </p>
                  <div className="flex items-center flex-wrap">
                    {Object.values(iconSauceValue.icon).map((value) => {
                      return <IconBox key={value.iconName} icon={value} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center flex-wrap">
        {Object.values(IconSauce).map((iconSauceValue) => {
          return Object.values(iconSauceValue.icon).map((iconValues) => {
            return iconValues.svg ? (
              <li key={iconValues.iconName} className="mx-8">
                {iconValues.svg}
              </li>
            ) : (
              ""
            );
          });
        })}
      </div> */}
    </div>
  );
};

const IconBox = ({
  icon,
}: {
  icon: { iconName: string; src: string; main: boolean };
}) => {
  return (
    <>
      {icon.main && (
        <div className="relative flex flex-col basis-1/5 items-center p-1 lg:p-2">
          <div className="group peer rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 hover:dark:bg-slate-600 duration-300 p-3">
            <Image
              src={icon.src}
              alt={icon.iconName}
              width={45}
              height={45}
              className="lg:h-10 lg:w-10 h-7 w-7 group-hover:scale-125 duration-200"
            />
          </div>
          <div className="absolute top-0 -translate-y-6 bg-slate-600 rounded hidden peer-hover:block">
            <p className="text-white text-xs p-1">{icon.iconName}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
