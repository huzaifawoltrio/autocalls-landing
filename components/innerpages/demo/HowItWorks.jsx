import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Build",
      description:
        "Utilize the voice AI API and our intuitive agent builder to create custom AI callers effortlessly.",
      image: "/assets/images/template/demo-build.png",
    },
    {
      number: "02",
      title: "Test",
      description:
        "Perform comprehensive agent testing with built-in LLM features to ensure seamless handling of edge cases.",
      image: "/assets/images/template/demo-test.png",
    },
    {
      number: "03",
      title: "Deploy",
      description:
        "Easily deploy your agents for AI phone calls, web calls, SMS, chat, and more.",
      image: "/assets/images/template/demo-deploy.png",
    },
    {
      number: "04",
      title: "Monitor",
      description:
        "Artificial intelligence tracks success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls.",
      image: "/assets/images/template/demo-monitor.png",
    },
  ];

  return (
    <div id="how_it_works" className="how-it-works section panel overflow-hidden">
      <div className="section-outer panel py-6 md:py-8 xl:py-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Value
              </span>
              <h2 className="h3 lg:h2 m-0">How It Works</h2>
            </div>

            <div
              className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
            >
              {steps.map((step, index) => (
                <div key={index}>
                  <div className="panel p-4 lg:p-5 rounded-2 bg-secondary dark:bg-tertiary-700 h-100 hover:shadow-lg transition-all duration-300">
                    <div className="vstack gap-3 h-100">
                      <div className="hstack gap-3 items-center">
                        <div className="cstack w-64px h-64px rounded-circle bg-primary text-white">
                          <span className="h3 m-0">{step.number}</span>
                        </div>
                        <h4 className="h5 m-0" style={{ color: '#111827' }}>{step.title}</h4>
                      </div>
                      <p className="fs-7" style={{ color: '#374151' }}>{step.description}</p>
                      <div className="panel mt-auto p-4 rounded-1-5 bg-white dark:bg-tertiary-600">
                        <div className="vstack gap-2">
                          <div className="cstack w-48px h-48px rounded-circle bg-primary-50 dark:bg-primary-900 text-primary mx-auto">
                            <i className={`icon icon-2 ${
                              index === 0 ? "unicon-code" :
                              index === 1 ? "unicon-check-circle" :
                              index === 2 ? "unicon-rocket" :
                              "unicon-chart-line"
                            }`} />
                          </div>
                          <div className="text-center">
                            <p className="fs-8 fw-medium m-0" style={{ color: '#374151' }}>
                              {index === 0 && "Visual Builder & API"}
                              {index === 1 && "LLM Testing Suite"}
                              {index === 2 && "Multi-Channel Deploy"}
                              {index === 3 && "Real-time Analytics"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
