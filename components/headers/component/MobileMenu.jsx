"use client";
import { useContextElement } from "@/context/Context";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const { isDark, handleToggle } = useContextElement();
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

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
    setSearchQuery(""); // Clear search when navigating
  }, [pathname]);

  // Menu items for filtering
  const menuItems = [
    { label: "Home", href: "/", keywords: ["home", "main", "start"] },
    { label: "Pricing", href: "/pricing", keywords: ["pricing", "plans", "cost", "price"] },
    { label: "Features", href: "/features", keywords: ["features", "capabilities", "functions"] },
    { label: "Demo", href: "/demo", keywords: ["demo", "demonstration", "preview"] },
    { label: "Contact Us", href: "/contact", keywords: ["contact", "support", "help", "reach"] },
  ];

  const authItems = [
    { label: "Log in", href: "https://app.centrecall.ai/login", external: true, keywords: ["login", "sign in", "access"] },
    { label: "Sign up", href: "https://app.centrecall.ai/register", external: true, keywords: ["signup", "register", "join", "create account"] },
  ];

  // Filter menu items based on search query
  const filteredMenuItems = menuItems.filter(item => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.label.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.includes(query))
    );
  });

  const filteredAuthItems = authItems.filter(item => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.label.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.includes(query))
    );
  });

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
              type="text"
              className="form-control form-control-sm fs-7 rounded-default"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            {filteredMenuItems.length === 0 && filteredAuthItems.length === 0 && searchQuery.trim() && (
              <li className="text-gray-500 px-2 py-2">
                No results found for "{searchQuery}"
              </li>
            )}
            {filteredMenuItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={pathname === item.href ? "menuActive" : ""}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {filteredMenuItems.length > 0 && filteredAuthItems.length > 0 && (
              <li className="hr opacity-10 my-1" />
            )}
            {filteredAuthItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
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
