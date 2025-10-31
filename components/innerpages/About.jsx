import React from "react";

export default function About() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Experience CenterCall
              </span>
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                See Our AI Voice Agents in Action
              </h1>
              <p className="fs-6 md:fs-5" style={{ color: '#374151' }}>
                Experience the power of AI-driven voice conversations. Our intelligent voice agents handle customer interactions naturally, efficiently, and at scale. Schedule a personalized demo to see how CenterCall can transform your business communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
