import React from "react";

export default function VideoSection() {
  return (
    <div className="video-section section panel overflow-hidden">
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-10 pb-0">
        <div className="container">
          <div className="section-inner panel">
            <div 
              className="panel rounded-2 lg:rounded-3 overflow-hidden"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
            >
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1136906981?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&title=0&portrait=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  title="CenterCall Demo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
  );
}
