import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// TODO sendgrid送信の作成
export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const msg = {
    to: data.email,
    from: "wmiayuhi@gmail.com",
    subject: "お問合せありがとうございました。",
    text: "お問合せを受け付けました。回答をお待ちください。" + data.message,
    html: "お問合せを受け付けました。回答をお待ちください。" + data.message,
  };

  console.log(msg);

  try {
    const transpoter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_ACCOUNT,
        pass: process.env.xxxx,
      },
    });

    // await SendGrid.send(msg);
    return NextResponse.json({ message: "メール送信成功" }, { status: 200 });
  } catch (error) {
    if (error) {
      console.error("メール送信時にエラーが発生しました:", error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
