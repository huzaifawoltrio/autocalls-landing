import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import About from "@/components/innerpages/About";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import Cta from "@/components/innerpages/Cta";

export const metadata = {
  title:
    "Schedule a Demo - CenterCall | Experience AI Voice Agents",
  description:
    "See CenterCall's AI voice agents in action. Schedule a personalized demo to discover how our intelligent voice automation can transform your business communications.",
};

export default function AboutPage() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <About />
              <About2 />
              <AboutValues />
              {/* <Feedback /> */}
              <Cta />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
