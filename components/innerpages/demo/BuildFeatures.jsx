import React from "react";

export default function BuildFeatures() {
  const features = [
    {
      icon: "unicon-book",
      title: "Auto-Sync Knowledge Base",
    },
    {
      icon: "unicon-phone-transfer",
      title: "Powerful Call Transfer Feature",
    },
    {
      icon: "unicon-calendar",
      title: "Easy Appointment Booking",
    },
    {
      icon: "unicon-navigator",
      title: "Navigate IVR",
    },
  ];

  return (
    <div id="build_features" className="build-features section panel overflow-hidden">
      <div className="section-outer panel py-6 md:py-8 xl:py-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Build
              </span>
              <h2 className="h3 lg:h2 m-0">
                Powerful AI Voice Agent Creation Features
              </h2>
            </div>

            <div
              className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
            >
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="panel p-4 lg:p-5 rounded-2 bg-secondary dark:bg-tertiary-700 h-100 hover:shadow-lg transition-all duration-300">
                    <div className="vstack gap-3">
                      <div className="cstack w-56px h-56px rounded-circle bg-primary text-white">
                        <i className={`icon icon-2 ${feature.icon}`} />
                      </div>
                      <h4 className="h6 m-0" style={{ color: '#111827' }}>{feature.title}</h4>
                      <p className="fs-7 m-0" style={{ color: '#374151' }}>
                        {index === 0 && "Automatically sync your knowledge base and company information for accurate AI responses."}
                        {index === 1 && "Seamlessly transfer calls to human agents when needed with full context preservation."}
                        {index === 2 && "Integrate with calendars to book, reschedule, and manage appointments automatically."}
                        {index === 3 && "Navigate complex phone menus and IVR systems to reach the right department instantly."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="panel mt-6 p-4 lg:p-6 rounded-2 bg-gradient-45 from-primary to-primary-600 text-white"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
            >
              <div className="row child-cols-12 lg:child-cols-3 g-4 items-center">
                <div className="lg:col-6">
                  <div className="vstack gap-2">
                    <h3 className="h4 m-0">Knowledge Base Integration</h3>
                    <p className="fs-6 opacity-90 m-0">
                      Connect your company data sources for intelligent, context-aware conversations
                    </p>
                  </div>
                </div>
                <div className="lg:col-6">
                  <div className="row child-cols-12 sm:child-cols-4 g-2">
                    <div>
                      <div className="panel p-3 rounded-1-5 bg-white bg-opacity-10 text-center">
                        <i className="icon icon-2 unicon-globe mb-1" />
                        <p className="fs-8 m-0">Website</p>
                      </div>
                    </div>
                    <div>
                      <div className="panel p-3 rounded-1-5 bg-white bg-opacity-10 text-center">
                        <i className="icon icon-2 unicon-file mb-1" />
                        <p className="fs-8 m-0">Documents</p>
                      </div>
                    </div>
                    <div>
                      <div className="panel p-3 rounded-1-5 bg-white bg-opacity-10 text-center">
                        <i className="icon icon-2 unicon-database mb-1" />
                        <p className="fs-8 m-0">CRM Data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
