"use client";

// import { useForm } from "react-hook-form";
import { useState } from "react";
// import { ErrorMessage } from "@hookform/error-message";

const Form = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const [formData, setFormData] = useState("");

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const confirmation = (data) => {
  //     console.log(data);
  //     setFormData(data);
  //     handleShow();
  //   };

  return (
    <section id="form">
      <div style={{ fontFamily: "Noto Sans JP" }}>
        <div className="py-5"></div>
        <div className="container text-center text-md-start">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              {/* <Form onSubmit={handleSubmit(confirmation)}> */}
              <div className="fs-3 pb-2">お問い合わせフォーム</div>
              <div className="pb-3">
                {/* <Form.Text> */}
                ご依頼・ご相談は、下記のフォームから受け付けております。
                <br />
                料金やサービス内容などお気軽にお問い合わせください。
                <br />
                ご検討中やお悩み中の段階でもまずはその旨ご連絡ください。
                {/* </Form.Text> */}
              </div>
              {/* ご用件のバリデーションメッセージ */}
              {/* <ErrorMessage
                  errors={errors}
                  name="subject"
                  render={({ message }) => (
                    <div>
                      <Form.Text className="fs-7 my-0 text-danger">
                        {message}
                      </Form.Text>
                    </div>
                  )}
                /> */}
              {/* お名前のバリデーションメッセージ */}
              {/* <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => (
                    <div>
                      <Form.Text className="my-0 text-danger">
                        {message}
                      </Form.Text>
                    </div>
                  )}
                /> */}
              {/* メールアドレスのバリデーションメッセージ */}
              {/* <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <div>
                      <Form.Text className="my-0 text-danger">
                        {message}
                      </Form.Text>
                    </div>
                  )}
                /> */}
              {/* お問い合わせ内容のバリデーションメッセージ */}
              {/* <ErrorMessage
                  errors={errors}
                  name="text"
                  render={({ message }) => (
                    <div>
                      <Form.Text className="mt-0 text-danger">
                        {message}
                      </Form.Text>
                    </div>
                  )}
                /> */}
              {/* <Form.Group className="py-4"> */}
              {/* <Form.Label> */}
              ご用件<sup className="text-danger">*必須</sup>
              {/* </Form.Label> */}
              {/* <select
                    className="form-select"
                    aria-label="Default select example"
                    {...register("subject", {
                      required: "ご用件を入力してください。",
                    })}
                  > */}
              <option value="" hidden>
                選択してください
              </option>
              <option value="ツール開発のご相談・ご依頼">
                ツール開発のご相談・ご依頼
              </option>
              <option value="システム開発のご相談・ご依頼">
                システム開発のご相談・ご依頼
              </option>
              <option value="ツール・システム点検のご相談・ご依頼">
                ツール・システム点検のご相談・ご依頼
              </option>
              <option value="その他のお問い合わせ">その他のお問い合わせ</option>
              {/* </select> */}
              {/* </Form.Group> */}
              {/* <Form.Group className="pb-4"> */}
              {/* <Form.Label> */}
              貴社名<sup>※法人様の場合はご記入ください。</sup>
              {/* </Form.Label> */}
              {/* <Form.Control
                    type="text"
                    {...register("company", {
                      required: false,
                    })}
                  /> */}
              {/* </Form.Group> */}
              {/* <Form.Group className="pb-4"> */}
              {/* <Form.Label> */}
              お名前<sup className="text-danger">*必須</sup>
              {/* </Form.Label> */}
              {/* <Form.Control
                    type="text"
                    {...register("name", {
                      required: "お名前を入力してください。",
                    })}
                  /> */}
              {/* </Form.Group> */}
              {/* <Form.Group className="pb-4"> */}
              {/* <Form.Label> */}
              メールアドレス<sup className="text-danger">*必須</sup>
              {/* </Form.Label> */}
              {/* <Form.Control
                    type="email"
                    {...register("email", {
                      required: "メールアドレスを入力してください。",
                    })}
                  /> */}
              {/* </Form.Group> */}
              {/* <Form.Group className="pb-4"> */}
              {/* <Form.Label> */}
              お問い合わせ内容<sup className="text-danger">*必須</sup>
              {/* </Form.Label> */}
              {/* <Form.Control
                    as="textarea"
                    style={{ height: "200px" }}
                    rows={3}
                    {...register("text", {
                      required: "お問い合わせ内容を入力してください。",
                    })}
                  /> */}
              {/* </Form.Group> */}
              {/* <Form.Group controlId="formFileMultiple" className="pb-4">
                            <Form.Label>添付ファイル（画像・動画ファイル等）</Form.Label>
                            <Form.Control type="file" multiple {...register("picFile")}/>
                            </Form.Group> */}
              <div className="text-center pt-4">
                <button
                  className="px-5"
                  type="submit"
                  // onClick={() => confirmation()}
                >
                  送信内容の確認
                </button>
              </div>
              {/* </Form> */}
              {/* <Modal size="lg" show={show} onHide={handleClose}> */}
              {/* <Form
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHNgQIKbGYU0A5-z-7FAIl-oZY9giGHeVp01i1bmr35gwnvw/formResponse"
                  method="POST"
                > */}
              <div className="mx-2">
                {/* <Modal.Header closeButton> */}
                <div>送信内容の確認</div>
                {/* </Modal.Header> */}
                {/* <Modal.Body> */}
                <div className="mb-5">
                  <div className="mb-4">
                    <p>以下の内容で送信してよろしいでしょうか？</p>
                  </div>
                  <div className="container my-5 text-break">
                    <div className="row">
                      <div className="col-md-3">
                        <p className="fw-bold">ご用件</p>
                      </div>
                      <div className="col-md-9">
                        <input
                          name="entry.1962389982"
                          // defaultValue={formData["subject"]}
                          // disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="fw-bold">貴社名</p>
                      </div>
                      <div className="col-md-9">
                        <input
                          name="entry.376773258"
                          // defaultValue={formData["company"]}
                          // disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="fw-bold">お名前</p>
                      </div>
                      <div className="col-md-9">
                        <input
                          name="entry.435933762"
                          // defaultValue={formData["name"]}
                          // disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="fw-bold">メールアドレス</p>
                      </div>
                      <div className="col-md-9">
                        <input
                          name="entry.298084428"
                          // defaultValue={formData["email"]}
                          // disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="fw-bold">お問い合わせ内容</p>
                      </div>
                      <div className="col-md-9">
                        <input
                          name="entry.1663913184"
                          // defaultValue={formData["text"]}
                          // disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-2 text-center">
                  <button className="" onClick={handleClose}>
                    戻る
                  </button>
                  <button
                    type="submit"
                    className="ms-3"
                    // href="/Thanks"
                  >
                    送信する
                  </button>
                </div>
                {/* </Modal.Body> */}
              </div>
              {/* </Form> */}
              {/* </Modal> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
