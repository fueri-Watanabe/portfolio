import Image from "next/image";
// TODO 蛇腹に横長・アイコン/イラスト付きで動きを付ける。
const WorkFlow = () => {
  const contents = [
    {
      title: "お問い合わせ",
      src: "/workFlow/mail.svg",
      explain: "まずはメールフォームにてお気軽にご連絡ください。",
    },
    {
      title: "ヒアリング",
      src: "/workFlow/hearing.svg",
      explain:
        "作成したい物のイメージなどをお伝え下さい。参考資料・サンプルなど御座いますとより一層早く仕上がります。",
    },
    {
      title: "お見積り",
      src: "/workFlow/quotation.svg",
      explain: "打ち合わせ後、数日以内にお見積りを出させていただきます。",
    },
    {
      title: "作成開始",
      src: "/workFlow/coding.svg",
      explain:
        "作成中のご連絡をスムーズにして頂けると手直しの必要が無くなるなどしっかりした物が出来上がります。",
    },
    {
      title: "最終確認",
      src: "/workFlow/confirm.svg",
      explain:
        "出来上がった物を実際に触っていただき、修正箇所や追加の発注が御座いましたらお気軽にお申し付け下さい。",
    },
    {
      title: "完了(納品)",
      src: "/workFlow/finish.svg",
      explain:
        "ご依頼終了後でもご質問・ご相談等ありましたらお気軽にご連絡ください。※納品後1ヶ月間は無料で手直しをしております。※追加の修正の場合は別途のご依頼となり追加料金を頂く場合があります。",
    },
  ];
  return (
    <div className="container">
      <div className="flex flex-col gap-10 py-5">
        {contents.map((value, index) => {
          return (
            <div key={index} className="flex items-center gap-4">
              <Image src={value.src} alt="" width={100} height={50} />
              <div className="flex flex-col items-start gap-4">
                <p className="text-emerald-600 text-xl font-bold">
                  {value.title}
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="text-lg">{value.explain}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WorkFlow;
