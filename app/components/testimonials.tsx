// TODO カード式で作成
const Testimonials = () => {
  return (
    <div className="container flex flex-col">
      <p className="px-4">
        依頼完了後のお客様からのレビューを一部掲載しております。
      </p>
      <div className="p-4 mt-4 shadow hover:shadow-xl transition-shadow duration-500 rounded-lg">
        <p>
          Googleカレンダーを日毎にスプレッドシートに反映させ、
          <br />
          会社の日報を自動で作成できるようスクリプトを組んでいただきました。
          <br />
          別シートにかなり丁寧な説明書きも頂き、
          <br />
          もちろんスクリプトも問題なく動作し大満足の仕上がりです。
          <br />
          社内をGoogleアプリケーションで統一している最中ですので、
          <br />
          ぜひまた依頼させて頂こうと思います。ありがとうございました。
        </p>
        <div className="col text-end">IT・通信・インターネット</div>
      </div>
      <div className="p-4 mt-4 shadow hover:shadow-xl transition-shadow duration-500 rounded-lg">
        <p>
          対応から修正まで素早い対応でありがとうございます。
          <br />
          また何かございましたらお願い致します。
          <br />
          ありがとうございました。
        </p>
        <div className="col text-end">卸売・小売</div>
      </div>
      <div className="p-4 mt-4 shadow hover:shadow-xl transition-shadow duration-500 rounded-lg">
        <p>
          とても丁寧に対応してもらいました。
          <br />
          顧客の「思い」をくみ取る想像力と提案力に裏打ちされたいい仕事をしていただきました。
          <br />
          ありがとうございました。
        </p>
        <div className="col text-end">スポーツ・フィットネス</div>
      </div>
      <div className="p-4 mt-4 shadow hover:shadow-xl transition-shadow duration-500 rounded-lg">
        <p>
          この度も誠にありがとうございました。
          <br />
          レスポンスが早く、想像通りのものを作成頂きありがとうございます。
          <br />
          今後ともよろしくお願いいたします。
        </p>
        <div className="col text-end">卸売・小売</div>
      </div>
    </div>
  );
};
export default Testimonials;
