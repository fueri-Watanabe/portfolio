import { ContactSchemaType } from "@/app/components/tools/validation";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: NextRequest) => {
  const data: ContactSchemaType = await request.json();
  const { title, contactName, company, email, content } = data;
  const toHostMessage = {
    from: email,
    to: process.env.MAIL_USER,
    subject: "ポートフォリオからお問い合わせがありました。",
    text: `お問合せがありました。
    ご用件: ${title}
    お名前: ${contactName}
    貴社名: ${company}
    メールアドレス: ${email}
    お問い合わせ内容: ${content}`,
    html: `<p><strong>お問合せがありました。</strong></p>
    <p>ご用件: ${title}<p>
    <p>お名前: ${contactName}<p>
    <p>貴社名: ${company}<p>
    <p>メールアドレス: ${email}<p>
    <p>お問い合わせ内容: ${content}<p>`,
  };

  const toCustomerMessage = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "お問合せありがとうございました。",
    text: `お問合せを受け付けました。回答をお待ちください。
    ご用件: ${title}
    お名前: ${contactName}
    貴社名: ${company}
    メールアドレス: ${email}
    お問い合わせ内容: ${content}`,
    html: `<p><strong>お問合せを受け付けました。</strong></p>
    <p><strong>回答をお待ちください。</strong></p>
    <p>ご用件: ${title}</p>
    <p>お名前: ${contactName}</p>
    <p>貴社名: ${company}</p>
    <p>メールアドレス: ${email}</p>
    <p>お問い合わせ内容: ${content}</p>`,
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
    return NextResponse.json({ message: "メール送信成功" }, { status: 200 });
  } catch (error) {
    if (error) {
      console.error("メール送信時にエラーが発生しました:", error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
