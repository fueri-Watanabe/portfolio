import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// TODO sendgrid送信の作成
export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const toHostMessage = {
    from: data.email,
    to: process.env.MAIL_USER,
    subject: "[お問い合わせ]",
    text: "お問合せがありました。" + data.message,
    html: "お問合せがありました。" + data.message,
  };

  const toCustomerMessage = {
    from: process.env.MAIL_USER,
    to: data.email,
    subject: "お問合せありがとうございました。",
    text: "お問合せを受け付けました。回答をお待ちください。" + data.message,
    html: "お問合せを受け付けました。回答をお待ちください。" + data.message,
  };

  const auth = {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  };

  const transport = {
    service: "gmail",
    port: 465,
    secure: true,
    auth,
  };

  try {
    const transporter = nodemailer.createTransport(transport);
    await transporter.sendMail(toHostMessage);
    await transporter.sendMail(toCustomerMessage);
    console.log(data);
    return NextResponse.json({ message: "メール送信成功" }, { status: 200 });
  } catch (error) {
    if (error) {
      console.error("メール送信時にエラーが発生しました:", error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
