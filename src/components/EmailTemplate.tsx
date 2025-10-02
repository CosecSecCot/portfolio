import { Heading, Text } from "@react-email/components";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export default function EmailTemplate({
  email,
  message,
}: Readonly<EmailTemplateProps>) {
  return (
    <>
      <Heading as="h1" className="text-center">
        {email} sent you a message.
      </Heading>
      <Text>{message}</Text>
    </>
  );
}
