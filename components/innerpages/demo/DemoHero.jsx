"use client";
import React, { useState } from "react";

export default function DemoHero() {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
  });

  const useCases = [
    { icon: "unicon-user-check", label: "Receptionist" },
    { icon: "unicon-calendar", label: "Appointment Setter" },
    { icon: "unicon-phone", label: "Lead Qualification" },
    { icon: "unicon-document", label: "Survey" },
    { icon: "unicon-headphone", label: "Customer Service" },
    { icon: "unicon-money-bill", label: "Debt Collection" },
  ];

  return (
    <div id="demo_hero" className="demo-hero section panel overflow-hidden">
      <div className="section-outer panel py-6 md:py-8 xl:py-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Use Cases
              </span>
              <h1 className="h2 sm:h1 lg:display-6 m-0">
                Try Our Live Demo
              </h1>
              <p className="fs-6 xl:fs-5" style={{ color: '#374151' }}>
                Discover how our AI caller transforms customer conversations.
              </p>
            </div>

            <div
              className="row child-cols-12 g-4 lg:g-6"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
            >
              <div className="lg:col-5">
                <div className="panel p-4 lg:p-6 rounded-2 bg-tertiary dark:bg-tertiary-700 shadow-lg h-100">
                  <div className="vstack gap-2 mb-4">
                    <div className="cstack w-56px h-56px rounded-circle bg-primary text-white mb-2">
                      <i className="icon icon-3 unicon-phone" />
                    </div>
                    <h3 className="h5 m-0 text-white">Receive a live call from our agent</h3>
                    <p className="fs-7 text-white text-opacity-80 m-0">
                      Experience our AI voice technology firsthand. Enter your details and we'll call you instantly.
                    </p>
                  </div>
                  <form className="vstack gap-3">
                    <div>
                      <label className="form-label fs-7 mb-1 text-white">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control bg-white dark:bg-tertiary-600 dark:text-white border-0"
                        placeholder="+1-234-567-890"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="form-label fs-7 mb-1 text-white">Name</label>
                      <input
                        type="text"
                        className="form-control bg-white dark:bg-tertiary-600 dark:text-white border-0"
                        placeholder="John"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="form-label fs-7 mb-1 text-white">Email Address</label>
                      <input
                        type="email"
                        className="form-control bg-white dark:bg-tertiary-600 dark:text-white border-0"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-md btn-primary text-white mt-2 shadow-xs"
                    >
                      <i className="icon icon-narrow unicon-phone me-1" />
                      GET A CALL NOW
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:col-7">
                <div className="panel vstack gap-4 h-100">
                  <div className="panel p-4 lg:p-6 rounded-2 bg-secondary dark:bg-tertiary-600 h-100">
                    <h4 className="h6 mb-4" style={{ color: '#111827' }}>Popular Use Cases</h4>
                    <div className="row child-cols-6 sm:child-cols-4 g-3">
                      {useCases.map((useCase, index) => (
                        <div key={index}>
                          <div className="panel p-3 rounded-1-5 bg-white dark:bg-tertiary-700 text-center hover:shadow-xs transition-all duration-300">
                            <div className="cstack w-48px h-48px rounded-circle bg-primary-50 dark:bg-primary-900 text-primary mx-auto mb-2">
                              <i className={`icon icon-1 ${useCase.icon}`} />
                            </div>
                            <p className="fs-7 fw-medium m-0" style={{ color: '#111827' }}>{useCase.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="panel mt-4 p-4 rounded-1-5 bg-gradient-45 from-primary to-primary-600 text-white">
                      <div className="hstack gap-3 items-center">
                        <div className="cstack w-48px h-48px rounded-circle bg-white bg-opacity-20">
                          <i className="icon icon-2 unicon-zap" />
                        </div>
                        <div className="vstack gap-0">
                          <span className="fs-6 fw-bold">24/7 Availability</span>
                          <span className="fs-7 opacity-90">Handle unlimited parallel calls instantly</span>
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
    </div>
  );
}
