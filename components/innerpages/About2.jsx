import React from "react";

export default function About2() {
  const stats = [
    { value: "99.9%", text: "Uptime" },
    { value: "50ms", text: "Latency" },
    { value: "24/7", text: "Available" },
    { value: "100+", text: "Languages" },
  ];

  return (
    <div
      id="about_us"
      className="about-us section panel overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 mb-4" style={{ color: '#111827' }}>Why Choose CenterCall</h2>
              <p className="fs-5 xl:fs-4" style={{ color: '#374151' }}>
                CenterCall's AI voice agents deliver human-like conversations with enterprise-grade reliability. Our platform handles everything from appointment scheduling to customer support, allowing your team to focus on what matters most. With advanced natural language processing and seamless integrations, we make it easy to deploy intelligent voice automation across your organization.
              </p>
              <p className="fs-5 xl:fs-4" style={{ color: '#374151' }}>
                Join hundreds of businesses that trust CenterCall to handle millions of customer conversations every month. Our AI agents learn from every interaction, continuously improving to provide better service and higher customer satisfaction.
              </p>
              <div className="panel mt-6">
                <div className="row child-cols-6 lg:child-cols-4 justify-center g-3 col-match">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-1">
                        <h4 className="h2 xl:h1 m-0" style={{ color: '#111827' }}>
                          {stat.value}
                        </h4>
                        <p className="fs-6 lg:fs-5 text-nowrap" style={{ color: '#374151' }}>
                          {stat.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
