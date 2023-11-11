import Image from "next/image";
// TODO 蛇腹に横長・アイコン/イラスト付きで動きを付ける。
const WorkFlow = () => {
  return (
    <div className="container">
      <div className="py-5">
        <div className="flex border rounded-lg">
          <Image src="/workFlow/mail.svg" alt="" width={100} height={100} />
          <div className="row align-items-center fw-bold">
            <p>お問い合わせ</p>
          </div>
          <div className="row">
            まずはメールフォームにてお気軽にご連絡ください。
          </div>
        </div>
        <div className="flex border rounded-lg mt-6">
          <Image src="/workFlow/hearing.svg" alt="" width={100} height={100} />
          <div className="row align-items-center fw-bold">
            <span className="col fs-4">ヒアリング</span>
          </div>
          <div className="row">
            <span className="col">
              作成したい物のイメージなどをお伝え下さい。
              <br />
              参考資料・サンプルなど御座いますとより一層早く仕上がります。
            </span>
          </div>
        </div>
        <div className="flex border rounded-lg mt-6">
          <Image
            src="/workFlow/quotation.svg"
            alt=""
            width={100}
            height={100}
          />
          <div className="row align-items-center fw-bold">
            <span className="col fs-4">お見積り</span>
          </div>
          <div className="row">
            <span className="col">
              打ち合わせ後、数日以内にお見積りを出させていただきます。
            </span>
          </div>
        </div>
        <div className="flex border rounded-lg mt-6">
          <Image src="/workFlow/coding.svg" alt="" width={100} height={100} />
          <div className="row align-items-center fw-bold">
            <span className="col fs-4">作成開始</span>
          </div>
          <div className="row">
            <div
              className="col-1 col-md-1 py-3 text-center"
              style={{ fontSize: "0.1vmax" }}
            ></div>
            <span className="col">
              作成中のご連絡をスムーズにして頂けると手直しの必要が無くなるなど
              <br />
              しっかりした物が出来上がります。
            </span>
          </div>
        </div>
        <div className="flex border rounded-lg mt-6">
          <Image src="/workFlow/confirm.svg" alt="" width={100} height={100} />
          <div className="row align-items-center fw-bold">
            <span className="col fs-4">最終確認</span>
          </div>
          <div className="row">
            <span className="col">
              出来上がった物を実際に触っていただき、
              <br />
              修正箇所や追加の発注が御座いましたらお気軽にお申し付け下さい。
            </span>
          </div>
        </div>
        <div className="flex border rounded-lg mt-6">
          <Image src="/workFlow/finish.svg" alt="" width={100} height={100} />
          <div className="row align-items-center fw-bold">
            <span className="col fs-4">完了(納品)</span>
          </div>
          <div className="row">
            <span className="col">
              ご依頼終了後でもご質問・ご相談等ありましたらお気軽にご連絡ください。
              <br />
              ※納品後1ヶ月間は無料で手直しをしております。
              <br />
              ※追加の修正の場合は別途のご依頼となり追加料金を頂く場合があります。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkFlow;
