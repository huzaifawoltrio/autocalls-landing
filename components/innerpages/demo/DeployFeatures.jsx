import React from "react";

export default function DeployFeatures() {
  const features = [
    {
      title: "Display Branded Call ID",
      description:
        "Enable Retell AI's Branded Call feature to unlock new levels of customer trust and satisfaction for outbound call operations.",
      image: "/assets/images/template/demo-phone.png",
      bgClass: "bg-white dark:bg-tertiary-600",
    },
    {
      title: "Using SIP Trunking Connect to Any Telephony",
      description:
        "Use your existing phone numbers or your familiar VOIP providers. You can connect to any telephony using Retell SIP Trunking.",
      logos: true,
      bgClass: "bg-white dark:bg-tertiary-600",
    },
    {
      title: "Batch Calling",
      description:
        "Effortlessly run batch call campaigns without concurrency limits, with detailed conversion tracking available after each campaign.",
      bgClass: "bg-white dark:bg-tertiary-600",
    },
    {
      title: "Verified Phone Numbers",
      description:
        "Build and maintain trust with customers with verified phone numbers that prevent your calls being labeled as spam.",
      bgClass: "bg-white dark:bg-tertiary-600",
    },
  ];

  return (
    <div id="deploy_features" className="deploy-features section panel overflow-hidden uc-dark">
      <div className="section-outer panel py-6 md:py-8 xl:py-10 bg-tertiary dark:bg-tertiary-700">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-white">
                Deploy
              </span>
              <h2 className="h3 lg:h2 m-0 text-white">
                Effortlessly Deploy AI Calls
              </h2>
            </div>

            <div
              className="row child-cols-12 sm:child-cols-6 g-4"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
            >
              {features.map((feature, index) => (
                <div key={index} className={index === 1 ? "sm:col-12" : ""}>
                  <div className={`panel p-4 lg:p-5 rounded-2 ${feature.bgClass} h-100 hover:shadow-lg transition-all duration-300`}>
                    <div className="vstack gap-3">
                      <div className="cstack w-56px h-56px rounded-circle bg-primary-50 dark:bg-primary-900 text-primary">
                        <i className={`icon icon-2 ${
                          index === 0 ? "unicon-phone" :
                          index === 1 ? "unicon-link" :
                          index === 2 ? "unicon-users" :
                          "unicon-shield-check"
                        }`} />
                      </div>
                      <div>
                        <h4 className="h6 mb-2" style={{ color: '#111827' }}>{feature.title}</h4>
                        <p className="fs-7 m-0" style={{ color: '#374151' }}>{feature.description}</p>
                      </div>
                      {feature.logos && (
                        <div className="panel mt-2 p-3 rounded-1-5 bg-secondary dark:bg-tertiary-700">
                          <p className="fs-8 fw-medium mb-2" style={{ color: '#374151' }}>Supported Providers:</p>
                          <div className="hstack flex-wrap gap-2">
                            <span className="badge bg-white dark:bg-tertiary-600 text-dark dark:text-white px-2 py-1">Twilio</span>
                            <span className="badge bg-white dark:bg-tertiary-600 text-dark dark:text-white px-2 py-1">Vonage</span>
                            <span className="badge bg-white dark:bg-tertiary-600 text-dark dark:text-white px-2 py-1">Telnyx</span>
                            <span className="badge bg-white dark:bg-tertiary-600 text-dark dark:text-white px-2 py-1">Plivo</span>
                            <span className="badge bg-white dark:bg-tertiary-600 text-dark dark:text-white px-2 py-1">RingCentral</span>
                          </div>
                        </div>
                      )}
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
