"use client";

import React, {
    useState,
    useCallback,
} from "react";
import { addToast } from "@heroui/react";
import emailjs from "@emailjs/browser";

import { ContactFormData, ContactPageState } from "@/components/contact/types";
import { PageHeader } from "@/components/page-header";
import { ContactCard } from "@/components/contact/contact-card";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { DATA } from "@/data";

const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const ContactPage: React.FC = () => {
  const DEMO_MODE = true; // when true the form will be display-only (no email is sent) :))) hehe -darlene
  const [state, setState] = useState<ContactPageState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const handleSubmit = useCallback(
    async (formData: ContactFormData): Promise<void> => {
      // If demo mode is enabled, short-circuit actual sending and provide a notice
      if (DEMO_MODE) {
        addToast({
          title: "Demo Mode",
          description: "Contact form is disabled in demo mode. The form is display-only.",
          color: "warning",
        });
        // ensure UI is not stuck in submitting state
        setState((prev) => ({ ...prev, isSubmitting: false }));
        return;
      }

      setState((prev) => ({ ...prev, isSubmitting: true, error: null }));

      const missingVars = Object.entries(EMAIL_CONFIG)
        .filter(([_, value]) => !value)
        .map(([key]) => `NEXT_PUBLIC_EMAILJS_${key.toUpperCase().replace(/([A-Z])/g, "_$1")}`);

      if (missingVars.length > 0) {
        console.error("Email configuration is incomplete:", missingVars);
        addToast({
          title: "Failed to Send Message",
          description: "Email configuration is incomplete. Please check environment variables.",
          color: "danger",
        });
        setState((prev) => ({ ...prev, isSubmitting: false }));
        return;
      }

      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        };

        await emailjs.send(
          EMAIL_CONFIG.serviceId!,
          EMAIL_CONFIG.templateId!,
          templateParams,
          EMAIL_CONFIG.publicKey!,
        );

        setState((prev) => ({ ...prev, isSuccess: true }));
        addToast({
          title: "Message Sent Successfully",
          description:
            "Thank you for your message! I'll get back to you soon.",
          color: "success",
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.";

        setState((prev) => ({ ...prev, error: errorMessage }));
        addToast({
          title: "Failed to Send Message",
          description: errorMessage,
          color: "danger",
        });
      } finally {
        setState((prev) => ({ ...prev, isSubmitting: false }));
      }
    },
    [],
  );

  const handleReset = useCallback(() => {
    setState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
    });
  }, []);

  return (
    <section className="py-20">
      <PageHeader texts={DATA.morphingTexts.contact} />
      <div className="container mx-auto px-4">
        <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800">
          <strong className="block font-semibold">Demo Mode</strong>
          <span className="block text-sm">Contact form is disabled — this page is display-only.</span>
        </div>
        <ContactCard heading={DATA.contact.heading}>
          <ContactMap src={DATA.contact.location.mapSrc} />
          <ContactForm
            isSubmitting={state.isSubmitting}
            isSuccess={state.isSuccess}
            onReset={handleReset}
            onSubmit={handleSubmit}
            readOnly={true}
          />
        </ContactCard>

        {state.error && (
          <div className="mt-6 p-4 bg-danger-50 border border-danger-200 rounded-lg">
            <p className="text-danger-700 text-sm">{state.error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;