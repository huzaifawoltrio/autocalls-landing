import { features8 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Features
              </span>
              <h2 className="h3 lg:h2 m-0">
                Powerful features for{" "}
                <span className="text-tertiary dark:text-primary">
                  every business need
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                From appointment booking to cold calling, CenterCall automates your phone communications with intelligent AI voice agents.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {features8.map((feature, index) => (
                <div key={index}>
                  <div className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-tertiary-700 dark:text-white rounded-2 lg:rounded-3">
                    <div className="panel p-2 pb-0">
                      <Image
                        className="rounded-1-5"
                        alt=""
                        src={feature.imgSrc}
                        width={680}
                        height={680}
                      />
                    </div>
                    <div className="panel vstack items-start gap-2 p-3 lg:p-4">
                      <h4 className="h4 m-0 text-inherit">{feature.title}</h4>
                      <a
                        href="#"
                        className="btn btn-sm btn-primary border px-2 mt-2"
                      >
                        <span>Try it now</span>
                        <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="md:col-6">
                <div className="panel overflow-hidden bg-tertiary-700 text-white rounded-2 lg:rounded-3">
                  <div className="panel vstack items-center text-center gap-3 p-4 lg:p-6 xl:p-8">
                    <h4 className="h4 m-0 text-inherit">
                      100+ languages to choose from
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      CenterCall supports over 100 languages and diverse accents to address global audiences. Each language is equipped with hundreds of natural-sounding voice options, while also allowing you to clone your own voice.
                    </p>
                    <p className="fs-6 md:fs-5 m-0 opacity-90">
                      Whether you're serving customers in English, Spanish, Mandarin, Arabic, or any other language, our AI voice agents deliver authentic conversations with native-level fluency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="panel overflow-hidden min-h-450px bg-tertiary text-white rounded-2 lg:rounded-3 uc-dark">
                  <div className="panel vstack items-center text-center gap-2 p-3 md:p-4 xl:p-6">
                    <h4 className="h4 m-0 text-inherit">
                      24/7 Availability & Parallel Calls
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                      Instantly answer customer support phone calls - zero waiting time, zero queue, zero customer frustrations. Real-time interaction with your systems and support procedure documents.
                    </p>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary border px-2 mt-2"
                    >
                      <span>Get started</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel min-h-200px md:min-h-250px xl:min-h-300px position-absolute bottom-0 start-0 end-0">
                    <video
                      className="position-cover blend-plus-lighter"
                      data-uc-video=""
                      src="/assets/images/media/animated-globe.mp4"
                      loop=""
                    />
                    <div
                      className="position-cover"
                      data-anime="targets: >*; scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                      <div
                        className="position-absolute"
                        style={{ bottom: "25%", left: "8%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/01.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "60%", left: "28%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/02.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "25%", right: "8%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/03.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "60%", right: "28%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/08.png"
                          width={150}
                          height={150}
                        />
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
