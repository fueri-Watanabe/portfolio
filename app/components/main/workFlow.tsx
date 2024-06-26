import Image from "next/image";

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
        "ご依頼終了後でもご質問・ご相談等ありましたらお気軽にご連絡ください。",
    },
  ];

  return (
    <div className="container">
      <div className="max-w-sm lg:max-w-full mx-auto flex flex-col py-5">
        {contents.map((value, index) => {
          return (
            <div
              key={index}
              className="group flex relative items-center py-6 gap-10"
            >
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#00bfa6] text-white relative font-medium text-lg cursor-default hover:animate-spin">
                {index + 1}
              </div>
              <div className="flex flex-col items-center mx-auto lg:m-0 lg:flex-row lg:gap-10">
                <Image
                  src={value.src}
                  alt={value.title}
                  width={100}
                  height={50}
                  className="h-24 w-24 group-hover:scale-125 transition"
                />
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <p className="text-2xl group-hover:text-3xl font-semibold title-font duration-150">
                    {value.title}
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="leading-relaxed whitespace-pre-wrap duration-150">
                        {value.explain}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-14">
        <div className="inline-block text-left font-light">
          <p>※納品後1ヶ月間は無料で手直しをしております。</p>
          <p>
            ※追加の修正の場合は別途のご依頼となり追加料金を頂く場合があります。
          </p>
        </div>
      </div>
    </div>
  );
};
export default WorkFlow;
