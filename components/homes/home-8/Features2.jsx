"use client";
import { features9 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Features2() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getCategoryColor = (category) => {
    const colors = {
      Core: "bg-blue-500/20 text-blue-300 border-blue-400/30",
      Sales: "bg-green-500/20 text-green-300 border-green-400/30",
      Advanced: "bg-purple-500/20 text-purple-300 border-purple-400/30",
      Integration: "bg-orange-500/20 text-orange-300 border-orange-400/30",
      Analytics: "bg-pink-500/20 text-pink-300 border-pink-400/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-300 border-gray-400/30";
  };

  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <style jsx>{`
        .feature-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 107, 219, 0.15) 0%, rgba(147, 51, 234, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .feature-card:hover::before {
          opacity: 1;
        }
        
        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(0, 107, 219, 0.4);
          box-shadow: 
            0 25px 50px -12px rgba(0, 107, 219, 0.4),
            0 0 0 1px rgba(0, 107, 219, 0.2),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }
        
        .feature-card.featured {
          background: linear-gradient(135deg, rgba(0, 107, 219, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%);
          border-color: rgba(0, 107, 219, 0.3);
        }
        
        .feature-card.featured::after {
          content: '★';
          position: absolute;
          top: 16px;
          right: 16px;
          color: #FFD700;
          font-size: 18px;
          opacity: 0.8;
        }
        
        .feature-icon-wrapper {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .feature-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, #006BDB, #9333EA);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }
        
        .feature-card:hover .feature-icon-wrapper::before {
          opacity: 0.3;
          animation: pulse 2s infinite;
        }
        
        .feature-card:hover .feature-icon-wrapper {
          transform: scale(1.15) rotate(-5deg);
        }
        
        .feature-card:hover .feature-title {
          background: linear-gradient(135deg, #006BDB, #9333EA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .feature-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 107, 219, 0.3) 0%, transparent 70%);
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.6s ease;
          pointer-events: none;
          filter: blur(40px);
        }
        
        .feature-card:hover .feature-glow {
          transform: translate(-50%, -50%) scale(1.5);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .category-badge {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .category-badge {
          transform: scale(1.05);
        }
        
        .stagger-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        @media (min-width: 1024px) {
          .stagger-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        
        @media (min-width: 640px) {
          .cta-buttons {
            flex-direction: row;
            width: auto;
          }
          
          .cta-buttons a {
            width: auto !important;
          }
        }
      `}</style>
      
      <div className="section-outer panel py-6 md:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white text-opacity-70">
        <div className="container max-w-screen-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill bg-white bg-opacity-5">
                Use Cases
              </span>
              <h2 className="h3 lg:h2 m-0 text-white">
                Endless use cases for your business
              </h2>
              <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                From outbound sales calls to inbound customer support, CenterCall handles it all with intelligent AI voice agents.
              </p>
            </div>
            
            <div
              className="stagger-grid"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {features9.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card ${feature.featured ? 'featured' : ''} bg-white bg-opacity-5 backdrop-blur-sm rounded-2 lg:rounded-3 p-5 lg:p-6`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="feature-glow"></div>
                  
                  <div className="vstack gap-4 h-100 position-relative z-1">
                    <div className="hstack justify-between items-start gap-3">
                      <div className="feature-icon-wrapper cstack w-56px h-56px lg:w-64px lg:h-64px bg-gradient-to-br from-primary to-purple-600 rounded-2 flex-shrink-0 shadow-lg">
                        <Image
                          className="w-28px lg:w-32px"
                          alt="feature-icon"
                          src={feature.icon}
                          width={32}
                          height={32}
                          style={{
                            filter: 'brightness(0) invert(1)',
                          }}
                        />
                      </div>
                      
                      <span className={`category-badge fs-8 fw-medium px-2 py-1 rounded-pill border ${getCategoryColor(feature.category)}`}>
                        {feature.category}
                      </span>
                    </div>
                    
                    <div className="vstack gap-2 flex-1">
                      <h3 className="feature-title h6 lg:h5 m-0 text-white fw-bold transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="desc fs-7 lg:fs-6 m-0 text-white text-opacity-70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div 
                      className="mt-auto pt-3 border-top border-white border-opacity-10"
                      style={{
                        opacity: hoveredCard === index ? 1 : 0,
                        transform: hoveredCard === index ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <div className="hstack gap-2 items-center text-primary">
                        <span className="fs-7 fw-medium">Explore feature</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div
              className="pre-cta vstack items-center gap-3 max-w-600px mx-auto text-center mt-8 xl:mt-12 px-3"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <p className="fs-6 text-white text-opacity-80 m-0">
                Ready to transform your customer communications?
              </p>
              <div className="cta-buttons">
                <Link
                  href={`/pricing`}
                  className="btn btn-md xl:btn-lg btn-primary border-0 px-4 lg:px-6 shadow-lg hover:shadow-xl transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #006BDB, #9333EA)',
                    width: '100%',
                    maxWidth: '280px',
                    margin: '0 auto'
                  }}
                >
                  <span>Start your free trial</span>
                </Link>
                <Link
                  href={`/features`}
                  className="btn btn-md xl:btn-lg bg-white bg-opacity-10 text-white border border-white border-opacity-20 px-4 lg:px-6 hover:bg-opacity-20 transition-all"
                  style={{
                    width: '100%',
                    maxWidth: '280px',
                    margin: '0 auto'
                  }}
                >
                  <span>View all features</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
