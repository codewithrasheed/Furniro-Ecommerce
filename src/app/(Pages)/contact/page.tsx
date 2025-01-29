import React from "react";
import ContactForm from "@/components/ContactForm";
import Support from "@/components/Support";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  return (
    <>
      <PageBanner title={"Contact"} desc={"Home > Contact"} />
      <ContactForm />
      <Support />
    </>
  );
};

export default Contact;
