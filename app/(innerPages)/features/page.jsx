import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Hero from "@/components/innerpages/features/Hero";
import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
export const metadata = {
  title:
    "Features - CenterCall | AI Voice Agent Capabilities & Integrations",
  description:
    "Explore CenterCall's powerful AI voice features: natural conversations, multi-language support, voice cloning, smart call routing, and seamless integrations with your business tools.",
};
export default function FeaturesPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
          <Hero />
          <KeyFeatures />
          <div className="pt-6 xl:pt-9"></div>
          <Faq />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
