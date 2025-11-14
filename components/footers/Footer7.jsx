import React from "react";
import LanguageSelect from "../common/LanguageSelect";
import Link from "next/link";
import Image from "next/image";
import { footerLinks6 } from "@/data/footer";

export default function Footer7() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel overflow-hidden"
    >
      <div className="footer-outer py-6 lg:py-8 xl:py-9 text-dark m-2 mt-0 rounded-2 bg-white" style={{ backgroundColor: 'white' }}>
        <div className="uc-footer-content">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link
                          className="panel text-none"
                          href={`/`}
                          style={{ width: 280 }}
                        >
                          <Image
                            alt="CenterCall"
                            src="/assets/images/CentreCall.svg"
                            width={300}
                            height={78}
                          />
                        </Link>
                        <p className="mt-2">
                          Automate your phone communications with AI voice agents. Never miss a call and convert more leads.
                        </p>
                      </div>
                      <LanguageSelect />
                    </div>
                  </div>
                  {footerLinks6.map((section, index) => (
                    <div key={index} className={section.className || ""}>
                      <ul className="nav-y gap-2 fw-medium text-dark">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.isLink ? (
                              <Link href={link.href} className="hover:text-primary transition-colors duration-150">{link.text}</Link>
                            ) : link.external ? (
                              <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-150">{link.text}</a>
                            ) : (
                              <a href={link.href} className="hover:text-primary transition-colors duration-150">{link.text}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 mt-6 border-top">
                <p>CenterCall © {new Date().getFullYear()}, All rights reserved.</p>
                <ul className="nav-x justify-center gap-2">
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-x-filled" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-youtube" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
