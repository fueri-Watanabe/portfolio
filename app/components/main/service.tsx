"use client";

import Image from "next/image";
import { IconSauce } from "../../_const/iconSauce";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
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
                className="h-44 p-6 flex flex-col justify-between basis-1/3 gap-5 dark:border rounded-xl hover:dark:bg-white hover:shadow-xl hover:dark:text-slate-900 transition select-none"
              >
                <div className="flex flex-row items-center gap-6">
                  <div>{value.icon}</div>
                  <div className="text-xl font-semibold">{value.title}</div>
                </div>
                <div className="basis-3/5">{value.text}</div>
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
                <li key={index} className="flex items-center">
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
            <div>
              <p className="text-2xl font-semibold">
                {IconSauce.PGLanguage.title}
              </p>
              <div className="flex items-center flex-wrap">
                {Object.values(IconSauce.PGLanguage.icon).map(
                  (value, index) => {
                    return <IconBox key={index} icon={value} />;
                  }
                )}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {IconSauce.Frontend.title}
              </p>
              <div className="flex items-center flex-wrap">
                {Object.values(IconSauce.Frontend.icon).map((value, index) => {
                  return <IconBox key={index} icon={value} />;
                })}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {IconSauce.BackendDBCloud.title}
              </p>
              <div className="flex items-center flex-wrap">
                {Object.values(IconSauce.BackendDBCloud.icon).map(
                  (value, index) => {
                    return <IconBox key={index} icon={value} />;
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconBox = ({
  icon,
}: {
  icon: { iconName: string; src: string; main: boolean };
}) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      {icon.main && (
        <div className="relative flex flex-col basis-1/5 items-center p-1 lg:p-2">
          {hover && (
            <div className="absolute top-0 -translate-y-6 bg-slate-600 rounded">
              <p className="text-white text-xs p-1">{icon.iconName}</p>
            </div>
          )}
          <div
            className="rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 hover:dark:bg-slate-600 duration-300 p-3"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setHover(true)}
          >
            <Image
              src={icon.src}
              alt={icon.iconName}
              width={45}
              height={45}
              className="lg:h-10 lg:w-10 h-7 w-7 hover:scale-125 duration-200"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
