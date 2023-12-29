"use client";

import Image from "next/image";
import { IconSauce } from "../../_const/iconSauce";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Service = () => {
  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 lg:h-auto">
      <div className="flex flex-col justify-between gap-8 lg:w-1/2 h-full">
        <p className="text-3xl">Webアプリケーション開発</p>
        <ul className="flex flex-col gap-3 text-xl">
          <li className="flex">
            <CodeBracketSquareIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 hover:dark:text-gray-300" />
            予約管理・商品管理システム
          </li>
          <li className="flex">
            <CodeBracketSquareIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 hover:dark:text-gray-300" />
            データツール
          </li>
          <li className="flex">
            <CodeBracketSquareIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 hover:dark:text-gray-300" />
            書類作成の自動化
          </li>
          <li className="flex">
            <CodeBracketSquareIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 hover:dark:text-gray-300" />
            Googleサービス内の連携・自動化
          </li>
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

const IconBox = ({ icon }: { icon: { iconName: string; src: string } }) => {
  const [hover, setHover] = useState(false);
  return (
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
  );
};

export default Service;
