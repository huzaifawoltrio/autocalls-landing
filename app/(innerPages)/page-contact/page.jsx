import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/homes/home-2/Faq";
export const metadata = {
  title:
    "Contact Us - CenterCall | Get in Touch with Our AI Voice Team",
  description:
    "Have questions about CenterCall's AI voice agents? Contact our team for demos, support, or partnership inquiries. We're here to help automate your phone communications.",
};
export default function ContactPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
          <Contact1 />

          <ContactLinks />
          <Faq />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
