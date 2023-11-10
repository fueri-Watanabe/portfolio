// TODO　名刺カード風に作成
const Profile = () => {
  return (
    <section id="profile">
      <div className="container py-5" style={{ maxWidth: "800px" }}>
        <div className="d-flex justify-content-center flex-column flex-md-row align-items-center mt-5">
          <div className="row mx-auto align-items-center">
            <p className="col-md-3 fs-5">渡部　弘</p>
            <p className="col-md-6">HIROSHI WATANABE</p>
            <p className="col-md-12 pb-3">
              広島県生まれ。独学でプログラミングを学ぶ。
              <br />
              2020年9月に初めてプログラム開発の依頼を受け、それ以降
              <br />
              Googleサービスのプログラム開発を中心に沢山の仕事を請け負う。
              <br />
              お客様からのリピート率が高い。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
