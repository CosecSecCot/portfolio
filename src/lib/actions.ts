"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: unknown, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: process.env.RESEND_TARGET_EMAIL ?? "",
      subject: `New Message from ${email}`,
      react: EmailTemplate({ email, message }),
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email." };
  }
}