import Image from "next/image";
import { IconSauce } from "../const/iconSauce";

const Service = () => {
  return (
    <div className="container flex justify-between">
      <div className="py-6">
        <p>
          fueri（フエリ）ではGoogleのサービスを中心に、
          <br />
          作業の効率化を図ったシステム/ツールを開発しております。
        </p>
        <p>
          例えば、
          <br />
          書類作成の自動化 / 商品・予約管理システム
          <br />
          メールやカレンダーの同期 / データツールの作成等
          <br />
          あらゆる業務をサポート致します。
        </p>
        <p>
          その他、
          <br />
          WebデザインやHTML/CSS/Java Scriptといった
          <br />
          フロントエンド開発も行っております。
        </p>
      </div>
      <div className="">
        {IconSauce.map((value, index) => {
          return (
            <div key={index}>
              <div className="flex items-center">
                {value.PGLanguage?.map((value) => {
                  return (
                    <div key={index} className="p-1">
                      <Image src={value} alt="" width={50} height={50} />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center">
                {value.Frontend?.map((value) => {
                  return (
                    <div key={index} className="p-1">
                      <Image src={value} alt="" width={50} height={50} />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center">
                {value.BackendDBCloud?.map((value) => {
                  return (
                    <div key={index} className="p-1">
                      <Image src={value} alt="" width={50} height={50} />
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
