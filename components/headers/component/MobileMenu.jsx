"use client";
import { useContextElement } from "@/context/Context";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MobileMenu() {
  const { isDark, handleToggle } = useContextElement();
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeMobileMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      id="uc-menu-panel"
      data-uc-offcanvas="overlay: true;"
      className="uc-offcanvas mobile-menu"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide "
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: 876 }}
      >
        <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
          <div className="uc-logo">
            <Link
              href={`/`}
              className="panel text-none"
              style={{ width: 190 }}
            >
              <Image
                alt="CenterCall"
                src="/assets/images/CentreCall.png"
                width={300}
                height={78}
              />
            </Link>
          </div>
          <button
            className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
            type="button"
            onClick={closeMobileMenu}
          >
            <i className="unicon-close" />
          </button>
        </header>
        <div className="panel">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="search-panel"
            className="form-icon-group vstack gap-1 mb-2 uc-sticky"
            data-uc-sticky=""
          >
            <input
              type="email"
              className="form-control form-control-sm fs-7 rounded-default"
              placeholder="Search.."
            />
            <span className="form-icon text-gray">
              <i className="unicon-search icon-1" />
            </span>
          </form>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 40, width: 290, margin: "0px 0px 16px" }}
            hidden=""
          />
          <ul className="nav-y gap-narrow fw-medium fs-6 uc-nav" data-uc-nav="">
            <li>
              <Link
                className={pathname === "/" ? "menuActive" : ""}
                href={`/`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/page-pricing" ? "menuActive" : ""}
                href={`/page-pricing`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/page-features" ? "menuActive" : ""}
                href={`/page-features`}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "#" ? "menuActive" : ""}
                href={`#`}
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/page-contact" ? "menuActive" : ""}
                href={`/page-contact`}
              >
                Contact Us
              </Link>
            </li>
            <li className="hr opacity-10 my-1" />
            <li>
              <a
                href="https://app.centrecall.ai/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="https://app.centrecall.ai/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up
              </a>
            </li>
          </ul>

          <div
            className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky uc-active uc-sticky-fixed"
            data-uc-sticky="position: bottom"
          >
            <div className="vstack gap-1">
              <span className="fs-7 opacity-60">Select theme:</span>
              <div className="darkmode-trigger" data-darkmode-switch="">
                <label className="switch">
                  <input
                    checked={!isDark}
                    onChange={handleToggle}
                    type="checkbox"
                  />
                  <span className="slider fs-5" />
                </label>
              </div>
            </div>
          </div>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 83, width: 290, margin: "32px 0px 0px" }}
          />
        </div>
      </div>
    </div>
  );
}
