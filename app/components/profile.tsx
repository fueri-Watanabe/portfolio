// TODO　名刺カード風に作成
const Profile = () => {
  return (
    <section id="profile">
      <div className="pt-12 flex justify-center items-center">
        <div className="w-96 h-40">
          <p>
            <ruby>
              渡部
              <rt>ワタナベ</rt>弘<rt>ヒロシ</rt>
            </ruby>
          </p>
          <p>
            広島県生まれ。独学でプログラミングを学ぶ。
            2020年9月に初めてプログラム開発の依頼を受け、それ以降
            Googleサービスのプログラム開発を中心に沢山の仕事を請け負う。
            お客様からのリピート率が高い。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
