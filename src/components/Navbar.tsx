import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/activities", label: "Activities" },
  { to: "/about", label: "About" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-amber-50/95 backdrop-blur-md shadow-sm border-b border-amber-200/60"
            : "bg-amber-50",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-2.5 flex-shrink-0"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-white font-bold text-sm shadow-sm group-hover:bg-amber-500 transition-colors duration-200">
                M
              </span>
              <span className="text-amber-900 font-semibold text-lg tracking-tight group-hover:text-amber-700 transition-colors duration-200">
                Montessori
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={[
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(to)
                      ? "text-amber-800 bg-amber-100"
                      : "text-amber-700 hover:text-amber-900 hover:bg-amber-100/70",
                  ].join(" ")}
                >
                  {label}
                  {isActive(to) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-amber-700 hover:bg-amber-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {/* Animated hamburger → X */}
              <span className="relative flex flex-col gap-[5px] w-5">
                <span
                  className={[
                    "block h-0.5 bg-current rounded-full origin-center transition-all duration-300",
                    isOpen ? "rotate-45 translate-y-[7px]" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-0.5 bg-current rounded-full transition-all duration-200",
                    isOpen ? "opacity-0 scale-x-0" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-0.5 bg-current rounded-full origin-center transition-all duration-300",
                    isOpen ? "-rotate-45 -translate-y-[7px]" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu — slide down */}
        <div
          className={[
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="border-t border-amber-200/60 bg-amber-50/98 px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ to, label }, i) => (
              <Link
                key={to}
                to={to}
                style={{
                  transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                }}
                className={[
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium",
                  "transition-all duration-200",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2 opacity-0",
                  isActive(to)
                    ? "bg-amber-100 text-amber-900"
                    : "text-amber-700 hover:bg-amber-100/70 hover:text-amber-900",
                ].join(" ")}
              >
                {isActive(to) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                )}
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile */}
      <div
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-amber-900/10 backdrop-blur-[1px] md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Spacer so page content clears the fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
