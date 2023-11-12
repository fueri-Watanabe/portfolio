import Image from "next/image";
import { IconSauce } from "../const/iconSauce";

const Service = () => {
  return (
    <div className="container flex justify-between">
      <div className="py-6 text-lg w-1/2">
        <p>
          fueri（フエリ）ではGoogleのサービスを中心に、
          作業の効率化を図ったシステム/ツールを開発しております。 例えば、
          書類作成の自動化 / 商品・予約管理システム メールやカレンダーの同期 /
          データツールの作成等 あらゆる業務をサポート致します。 その他、
          WebデザインやHTML/CSS/Java Scriptといった
          フロントエンド開発も行っております。
        </p>
      </div>
      <div className="">
        {IconSauce.map((value, index) => {
          return (
            <div key={index}>
              <div className="flex items-center">
                {value.PGLanguage?.map((value, index) => {
                  return (
                    <div key={index} className="p-2">
                      <Image
                        src={value}
                        alt=""
                        width={100}
                        height={100}
                        className="w-12 h-auto"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center">
                {value.Frontend?.map((value, index) => {
                  return (
                    <div key={index} className="p-2">
                      <Image
                        src={value}
                        alt=""
                        width={100}
                        height={100}
                        className="w-12 h-auto"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center">
                {value.BackendDBCloud?.map((value, index) => {
                  return (
                    <div key={index} className="p-2">
                      <Image
                        src={value}
                        alt=""
                        width={100}
                        height={100}
                        className="w-12 h-auto"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Service;
