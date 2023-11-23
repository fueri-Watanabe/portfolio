// TODO カード式で作成
const Testimonials = () => {
  const cards = [
    {
      text: "対応から修正まで素早い対応でありがとうございます。また何かございましたらお願い致します。 ありがとうございました。",
      work: "卸売・小売",
    },
    {
      text: "とても丁寧に対応してもらいました。顧客の「思い」をくみ取る想像力と提案力に裏打ちされたいい仕事をしていただきました。ありがとうございました。",
      work: "スポーツ・フィットネス",
    },
    {
      text: "この度も誠にありがとうございました。レスポンスが早く、想像通りのものを作成頂きありがとうございます。今後ともよろしくお願いいたします。",
      work: "卸売・小売",
    },
    {
      text: "Googleカレンダーを日毎にスプレッドシートに反映させ、会社の日報を自動で作成できるようスクリプトを組んでいただきました。別シートにかなり丁寧な説明書きも頂き、もちろんスクリプトも問題なく動作し大満足の仕上がりです。社内をGoogleアプリケーションで統一している最中ですので、ぜひまた依頼させて頂こうと思います。ありがとうございました。",
      work: "IT・通信・インターネット",
    },
  ];
  return (
    <div className="container">
      <p className="px-4 pb-14">
        依頼完了後のお客様からのレビューを一部掲載しております。
      </p>
      <div className="flex flex-col gap-14">
        {cards.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between p-4 dark:border shadow hover:shadow-xl transition-shadow duration-500 rounded-lg"
            >
              <p>{value.text} </p>
              <div className="col text-end">{value.work}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Testimonials;
