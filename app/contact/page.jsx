import { ContactSection } from "@/components/Export";

const Contact = () => {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicApiKey = process.env.EMAILJS_PUBLIC_KEY;
  return (
    <main className="container">
      <ContactSection
        serviceId={serviceId}
        templateId={templateId}
        publicApiKey={publicApiKey}
      />
    </main>
  );
};

export default Contact;
