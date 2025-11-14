import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";

import Faq from "@/components/homes/home-2/Faq";
import Pricing from "@/components/innerpages/Pricing";
export const metadata = {
  title:
    "Pricing - CenterCall | AI Voice Agent Plans for Every Business",
  description:
    "Choose the perfect CenterCall plan for your business. From Starter to Agency Whitelabel, automate your phone communications with AI voice agents. Save 2 months with yearly billing.",
};
export default function PricingPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
          <Pricing />
          {/* <div className="pt-6 xl:pt-9"></div> */}
          <Faq />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
