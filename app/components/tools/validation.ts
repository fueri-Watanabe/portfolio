import { z } from "zod";

export const ContactSchema = z.object({
  title: z.string().min(1, { message: "ご用件をお選びください。" }),
  contactName: z.string().min(1, { message: "お名前をご入力ください。" }),
  company: z.string(),
  email: z.string().email("メールアドレスをご入力ください。"),
  content: z.string().min(1, { message: "お問い合わせ内容をご記入ください。" }),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
