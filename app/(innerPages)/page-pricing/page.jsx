import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";

import Faq from "@/components/homes/home-2/Faq";
import Brands from "@/components/common/Brands2";
import Cta from "@/components/innerpages/features/Cta";
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
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Trusted by well-known brands.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
          <Cta />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
