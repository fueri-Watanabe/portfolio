// TODO　ノート風、答えを手書き赤ペンみたいにする。
const FAQ = () => {
  return (
    <section id="fAQ">
      <div className="container py-5" style={{ maxWidth: "1100px" }}>
        <div className="text-center mt-4 mb-5">
          <div className="h2">
            <span className="border-bottom border-info border-3">FAQ.</span>
          </div>
        </div>
        <table className="table table-striped table-borderless">
          <tbody>
            <tr>
              <th>Q.</th>
              <td>ざっくりとした案しかありませんが大丈夫ですか？</td>
            </tr>
            <tr>
              <th></th>
              <td>
                初めはざっくりした案でも大丈夫です！
                <br />
                相談や提案をしていきご満足頂けるものを作っていきます。
              </td>
            </tr>
            <tr>
              <th>Q.</th>
              <td>
                専門的な知識が無く、作成出来るか分かりませんが依頼しても良いでしょうか？
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                Googleサービスなどの機能では作成出来ないものはこちらで代替案をご提案させていただきます。
                勿論、相談は無料です。
              </td>
            </tr>
            <tr>
              <th>Q.</th>
              <td>
                ある程度固めてきましたのでプログラムの開発だけお願い出来ないでしょうか？
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                ありがとうございます。
                概要や設計がありますと仕上がりも早くより良いものが出来上がります。
              </td>
            </tr>
            <tr>
              <th>Q.</th>
              <td>
                大事な顧客情報が載っているのでサービスの共有が出来ないですがよろしいでしょうか？
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                作成作業やデバッグに支障が無ければ大丈夫です。
                <br />
                作成内容により作業が進まない場合がございますので事前にお伝えください。
                <br />
                fueriでは、個人情報の保護に関する法律その他の関係法令を遵守いたします。
              </td>
            </tr>
            <tr>
              <th>Q.</th>
              <td>相談やお見積りは無料でしょうか？</td>
            </tr>
            <tr>
              <th></th>
              <td>
                はい、無料です。
                <br />
                幅広くお受けしておりますのでお気軽にご連絡ください。
              </td>
            </tr>
            <tr>
              <th>Q.</th>
              <td>相場が分からず費用が心配です。金額は相談出来ますか？</td>
            </tr>
            <tr>
              <th></th>
              <td>
                お客様のご予算に合わせた提案をさせて頂きますのでご安心ください。
                <br />
                予算内で可能な範囲を提案させていただきます。料金ページをご参考ください。
              </td>
            </tr>
            <tr>
              <th>Q.</th>
              <td>納期の短縮（スピード仕上げ）は対応してますか？</td>
            </tr>
            <tr>
              <th></th>
              <td>
                対応しております。別途で費用が掛かってきますのでご了承ください。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="d-flex flex-column flex-md-row m-auto text-center justify-content-center border  border-3 border-warning rounded-3 py-4 my-5"
        style={{ maxWidth: "700px" }}
      >
        <div className="pe-md-5 my-1">
          <p className="fs-5 fw-bold m-0 pb-2">
            お手頃な価格で発注いただけます。
          </p>
          <p className="m-0">
            相談・お見積り無料。
            <br className="d-block d-md-none" />
            お気軽にお問い合わせください。
          </p>
        </div>
        <button className="align-self-center btn-lg">お問い合わせ</button>
      </div>
    </section>
  );
};

export default FAQ;
