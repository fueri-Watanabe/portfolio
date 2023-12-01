import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const contents = [
  {
    question: "ざっくりとした案しかありませんが大丈夫ですか？",
    answer:
      "初めはざっくりした案でも大丈夫です！相談や提案をしていきご満足頂けるものを作っていきます。",
  },
  {
    question:
      "専門的な知識が無く、作成出来るか分かりませんが依頼しても良いでしょうか？",
    answer:
      "Googleサービスなどの機能では作成出来ないものはこちらで代替案をご提案させていただきます。勿論、相談は無料です。",
  },
  {
    question:
      "ある程度固めてきましたのでプログラムの開発だけお願い出来ないでしょうか？",
    answer:
      "ありがとうございます。概要や設計がありますと仕上がりも早くより良いものが出来上がります。",
  },
  {
    question:
      "大事な顧客情報が載っているのでサービスの共有が出来ないですがよろしいでしょうか？",
    answer:
      "作成作業やデバッグに支障が無ければ大丈夫です。作成内容により作業が進まない場合がございますので事前にお伝えください。fueriでは、個人情報の保護に関する法律その他の関係法令を遵守いたします。",
  },
  {
    question: "相談やお見積りは無料でしょうか？",
    answer:
      "はい、無料です。幅広くお受けしておりますのでお気軽にご連絡ください。",
  },
  {
    question: "相場が分からず費用が心配です。金額は相談出来ますか？",
    answer:
      "お客様のご予算に合わせた提案をさせて頂きますのでご安心ください。予算内で可能な範囲を提案させていただきます。料金ページをご参考ください。",
  },
  {
    question: "納期の短縮（スピード仕上げ）は対応してますか？",
    answer: "対応しております。別途で費用が掛かってきますのでご了承ください。",
  },
];

const FAQ = () => {
  return (
    <div className="container pb-5">
      <div className="grid lg:grid-cols-3 gap-3">
        {contents.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between h-52 hover:shadow-xl duration-300 bg-slate-100 hover:bg-slate-50 dark:bg-slate-800  hover:dark:bg-slate-700 rounded p-3"
            >
              <div className="flex flex-col gap-2">
                <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
                <p className="text-sm font-medium">{value.question}</p>
              </div>
              <div className="leading-relaxed text-sm">{value.answer}</div>
            </div>
          );
        })}
        <div className="flex flex-col justify-between border rounded h-52">
          <div></div>
          <div className="underline">
            <p>
              お手頃な価格で発注いただけます。
              相談・お見積り無料、お気軽にお問い合わせください。
            </p>
          </div>
          <div className="flex justify-center p-4">
            <Link
              href={"#contact"}
              className="w-2/3 lg:w-1/2 custom-button text-center"
            >
              <p>お問い合わせ</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
