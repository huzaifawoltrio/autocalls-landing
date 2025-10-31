import React from "react";

export default function AboutValues() {
  const features = [
    {
      title: "Quick Setup",
      description: "Get started in minutes with our intuitive platform. No technical expertise required. Our user-friendly interface makes it easy to create and deploy AI voice agents without any coding knowledge. Simply configure your agent's behavior, upload your knowledge base, and you're ready to go live.",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards. Your data is protected with end-to-end encryption, secure data centers, and regular security audits. We take privacy seriously and ensure all customer conversations are handled with the highest level of security and confidentiality.",
    },
    {
      title: "Real-time Analytics",
      description: "Track performance, sentiment, and outcomes with comprehensive dashboards. Monitor call success rates, customer satisfaction scores, and conversion metrics in real-time. Get detailed insights into every conversation with transcripts, sentiment analysis, and actionable recommendations to continuously improve your AI agents.",
    },
    {
      title: "Easy Integration",
      description: "Connect with your existing CRM, calendar, and business tools seamlessly. Our platform integrates with popular services like Salesforce, HubSpot, Google Calendar, Zoom, and hundreds of other applications. Sync customer data automatically and streamline your workflows without disrupting your existing processes.",
    },
  ];

  return (
    <div
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                What Makes Us Different
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {features.map((feature, index) => (
                  <div key={index}>
                    <div className="panel vstack gap-2 p-4 lg:p-5 rounded-2 bg-secondary dark:bg-gray-800 h-100">
                      <h5 className="h5 lg:h4 m-0" style={{ color: '#111827' }}>{feature.title}</h5>
                      <p className="fs-6" style={{ color: '#374151' }}>
                        {feature.description}
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
  );
}
