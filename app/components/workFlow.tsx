const WorkFlow = () => {
  return (
    <>
      <div className="py-5">
        <div className="row align-items-center fw-bold">
          <span className="col-1 d-block d-md-none fs-3">①</span>
          <span className="col fs-4">お問い合わせ</span>
        </div>
        <div className="row">
          <div
            className="col-1 col-md-1 py-3 text-center"
            style={{ fontSize: "0.1vmax" }}
          >
            ●<br />●<br />●
          </div>
          <span className="col">
            まずはメールフォームにてお気軽にご連絡ください。
          </span>
        </div>
        <div className="row align-items-center fw-bold">
          <span className="col-1 d-block d-md-none fs-3">②</span>
          <span className="col fs-4">ヒアリング</span>
        </div>
        <div className="row">
          <div
            className="col-1 col-md-1 py-3 text-center"
            style={{ fontSize: "0.1vmax" }}
          >
            ●<br />●<br />●
          </div>
          <span className="col">
            作成したい物のイメージなどをお伝え下さい。
            <br />
            参考資料・サンプルなど御座いますとより一層早く仕上がります。
          </span>
        </div>
        <div className="row align-items-center fw-bold">
          <span className="col-1 d-block d-md-none fs-3">③</span>
          <span className="col fs-4">お見積り</span>
        </div>
        <div className="row">
          <div
            className="col-1 col-md-1 py-3 text-center"
            style={{ fontSize: "0.1vmax" }}
          >
            ●<br />●<br />●
          </div>
          <span className="col">
            打ち合わせ後、数日以内にお見積りを出させていただきます。
          </span>
        </div>
        <div className="row align-items-center fw-bold">
          <span className="col-1 d-block d-md-none fs-3">④</span>
          <span className="col fs-4">作成開始</span>
        </div>
        <div className="row">
          <div
            className="col-1 col-md-1 py-3 text-center"
            style={{ fontSize: "0.1vmax" }}
          >
            ●<br />●<br />●
          </div>
          <span className="col">
            作成中のご連絡をスムーズにして頂けると手直しの必要が無くなるなど
            <br />
            しっかりした物が出来上がります。
          </span>
        </div>
        <div className="row align-items-center fw-bold">
          <span className="col-1 d-block d-md-none fs-3">⑤</span>
          <span className="col fs-4">最終確認</span>
        </div>
        <div className="row">
          <div
            className="col-1 col-md-1 py-3 text-center"
            style={{ fontSize: "0.1vmax" }}
          >
            ●<br />●<br />●
          </div>
          <span className="col">
            出来上がった物を実際に触っていただき、
            <br />
            修正箇所や追加の発注が御座いましたらお気軽にお申し付け下さい。
          </span>
        </div>
        <div className="row align-items-center fw-bold">
          <span className="col-1 d-block d-md-none fs-3">⑥</span>
          <span className="col fs-4">完了(納品)</span>
        </div>
        <div className="row">
          <div className="col-1 col-md-1 py-3 text-center"></div>
          <span className="col">
            ご依頼終了後でもご質問・ご相談等ありましたらお気軽にご連絡ください。
            <br />
            ※納品後1ヶ月間は無料で手直しをしております。
            <br />
            ※追加の修正の場合は別途のご依頼となり追加料金を頂く場合があります。
          </span>
        </div>
      </div>
    </>
  );
};
export default WorkFlow;
