import { ContactFormData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: NextRequest) => {
  try {
    const data: ContactFormData = await request.json();
    const { title, contactName, company, email, content } = data;

    const companyText = company ? company : "指定なし";
    // HTML用改行エスケープ
    const formattedContent = content.replace(/\n/g, "<br>");

    // 1. 管理者（ご自身）向け通知メール
    const toHostMessage = {
      from: process.env.MAIL_USER,
      replyTo: email, // 送信者のアドレスに直接返信できるように設定
      to: process.env.MAIL_USER,
      subject: `【ポートフォリオお問い合わせ】${title}（${contactName} 様）`,
      text: `ポートフォリオサイトより新しいお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ詳細
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【ご用件】
${title}

【お名前】
${contactName} 様

【貴社名】
${companyText}

【メールアドレス】
${email}

【お問い合わせ内容】
${content}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
            📩 ポートフォリオよりお問い合わせがありました
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 130px; color: #64748b;">ご用件:</td>
              <td style="padding: 8px 0; color: #0f172a;">${title}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">お名前:</td>
              <td style="padding: 8px 0; color: #0f172a;">${contactName} 様</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">貴社名:</td>
              <td style="padding: 8px 0; color: #0f172a;">${companyText}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569;">【お問い合わせ内容】</p>
            <div style="color: #1e293b; white-space: pre-wrap;">${formattedContent}</div>
          </div>
        </div>
      `,
    };

    // 2. お客様向け自動返信メール
    const toCustomerMessage = {
      from: `fueri <${process.env.MAIL_USER}>`,
      to: email,
      subject: `【自動返信】お問い合わせありがとうございます｜fueri`,
      text: `${contactName} 様

この度はお問い合わせいただき、誠にありがとうございます。
個人事業主 fueri（フエリ）の渡辺です。

送信いただいた内容は正常に受け付けいたしました。
内容を確認の上、通常1〜2営業日以内にご返信させていただきます。
今しばらくお待ちいただけますようお願い申し上げます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 送信内容の確認
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【ご用件】
${title}

【お名前】
${contactName} 様

【貴社名】
${companyText}

【メールアドレス】
${email}

【お問い合わせ内容】
${content}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

※本メールはシステムによる自動送信です。
万が一、数日経過しても返信がない場合は、大変お手数ですがメールアドレスの誤記等をご確認の上、再度ご連絡いただけますと幸いです。

--------------------------------------------------
fueri（フエリ）
Hiroshi Watanabe / 渡辺 裕
Web開発 / 業務自動化・ツール構築 / 受託開発
Web: https://fueri.jp
--------------------------------------------------`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0; font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            お問い合わせを受け付けいたしました
          </h2>
          <p style="margin-top: 16px;"><strong>${contactName} 様</strong></p>
          <p>この度は、ポートフォリオサイトよりお問い合わせいただき誠にありがとうございます。<br>個人事業主 <strong>fueri（フエリ）</strong> です。</p>
          <p>送信いただきました内容は正常に受信いたしました。<br>内容を確認の上、<strong>通常 1〜2 営業日以内</strong>にご返信させていただきます。</p>

          <div style="margin: 24px 0; padding: 20px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #cbd5e1;">
            <p style="margin: 0 0 12px 0; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
              ■ 送信内容のご確認
            </p>
            <p style="margin: 4px 0;"><strong>ご用件:</strong> ${title}</p>
            <p style="margin: 4px 0;"><strong>お名前:</strong> ${contactName} 様</p>
            <p style="margin: 4px 0;"><strong>貴社名:</strong> ${companyText}</p>
            <p style="margin: 4px 0;"><strong>メールアドレス:</strong> ${email}</p>
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 4px 0; font-weight: bold; color: #475569;">お問い合わせ内容:</p>
              <div style="color: #1e293b; background: #ffffff; padding: 12px; border-radius: 4px; border: 1px solid #e2e8f0;">${formattedContent}</div>
            </div>
          </div>

          <p style="font-size: 13px; color: #64748b; margin-top: 24px;">
            ※本メールは送信専用の自動返信メールです。<br>
            万が一、数日経っても返信がない場合は、大変お手数ですがメールアドレスの誤り等の可能性がございますので、再度フォームよりご連絡いただけますと幸いです。
          </p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">

          <div style="font-size: 14px; color: #475569;">
            <p style="margin: 0; font-weight: bold; color: #0f172a; font-size: 16px;">fueri（フエリ）</p>
            <p style="margin: 4px 0;">Hiroshi Watanabe / 渡部 弘</p>
            <p style="margin: 4px 0; font-size: 13px;">Webシステム開発 / SPA・Next.js / 業務自動化・ツール作成</p>
          </div>
        </div>
      `,
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

    const transporter = nodemailer.createTransport(transport);
    await transporter.sendMail(toHostMessage);
    await transporter.sendMail(toCustomerMessage);

    return NextResponse.json({ message: "メール送信成功" }, { status: 200 });
  } catch (error) {
    console.error("メール送信時にエラーが発生しました:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました。" },
      { status: 500 },
    );
  }
};
