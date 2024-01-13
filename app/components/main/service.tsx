"use client";

import Image from "next/image";
import { IconSauce } from "../../_const/iconSauce";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const serviceContents = [
  "Webサイト",
  "業務系Webサービス",
  "DB管理型Webアプリケーション構築",
  "既存サイト・システム修正/管理",
  "Googleアプリ連携",
];

const Service = () => {
  // const textLightOff = "flex items-center text-gray-500";
  const textLightOn = "flex items-center";
  // const [contentClass, setContentClass] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setContentClass((prev) => (prev == 5 ? 0 : prev + 1));
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [contentClass]);

  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 lg:h-auto">
      <div className="flex flex-col justify-between gap-8 lg:w-1/2 h-full">
        <p className="text-3xl">Webアプリケーション開発</p>
        <ul className="flex flex-col gap-3 text-xl">
          {serviceContents.map((value, index) => {
            return (
              <li
                key={index}
                className={textLightOn}
                // className={contentClass > index ? textLightOn : textLightOff}
              >
                <CodeBracketSquareIcon className="h-6 w-6" />
                <p>{value}</p>
              </li>
            );
          })}
        </ul>
        <p>社内システム・個人ツールの作成、あらゆる業務をサポート致します。</p>
      </div>
      <div className="p-2">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-2xl font-semibold">
              {IconSauce.PGLanguage.title}
            </p>
            <div className="flex items-center flex-wrap">
              {Object.values(IconSauce.PGLanguage.icon).map((value, index) => {
                return <IconBox key={index} icon={value} />;
              })}
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">{IconSauce.Frontend.title}</p>
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
