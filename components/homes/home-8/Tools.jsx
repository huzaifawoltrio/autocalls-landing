import { tools } from "@/data/tools";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Tools() {
  return (
    <div
      id="tools_integrations"
      className="tools-integrations section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10">
        <div className="container">
          <div className="section-inner panel max-w-lg mx-auto">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Integrations
              </span>
              <h2 className="h3 lg:h2 m-0">Integrate with popular tools using our no-code platform</h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Easily manage AI voice agents without programming skills. Integrate with HubSpot, GoHighLevel, Zoho, Cal.com, Calendly & +250 more using drag and drop.
              </p>
            </div>
            <div
              className="panel vstack items-center gap-6 lg:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="row child-cols-3 lg:child-cols justify-center items-center text-center g-2 lg:g-4">
                {tools.map((tool, index) => (
                  <div key={index}>
                    <div className="panel">
                      <Image
                        className="min-w-48px lg:min-w-80px max-w-48px lg:max-w-80px"
                        alt={tool.alt}
                        src={tool.src}
                        width={80}
                        height={80}
                      />
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
