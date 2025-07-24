"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/component/_mobile_menu.module.scss";
import CloseIcon from "../Icon/CloseIcon";
import MenuIcon from "../Icon/MenuIcon";
gsap.registerPlugin(ScrollTrigger);

const MobileMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSidebar, setActiveMobileSidebar] =
    useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLButtonElement | null>(null);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Close dropdown when clicking a link
  const handleLinkClick = () => {
    setActiveDropdown(null);
    setActiveMobileSidebar(false);
  };

  useEffect(() => {
    if (activeMobileSidebar) {
      mobileMenuRef.current?.classList.add(styles.showSidebar);
    } else {
      mobileMenuRef.current?.classList.remove(styles.showSidebar);
    }
  }, [activeMobileSidebar]);

  return (
    <>
      <button
        ref={mobileMenuRef}
        onClick={() => setActiveMobileSidebar(!activeMobileSidebar)}
        className={styles.mobMenuIcon}
      >
        <MenuIcon Color="##148e8b" />
      </button>
      <div
        className={`${styles.mobileMenu}  ${
          activeMobileSidebar ? `${styles.showSidebar}` : ""
        }`}
      >
        <div className={styles.mobileHeader}>
          <div className={styles.logo}>
            <Image
              className="logo"
              src="/logo.png"
              alt="Logo"
              width={40}
              height={38}
            />
          </div>
          <button
            ref={mobileMenuRef}
            onClick={() => setActiveMobileSidebar(!activeMobileSidebar)}
            className={styles.mobCloseIcon}
          >
            <CloseIcon Color="#fff" />
          </button>
        </div>
        <nav className={styles.navbarMobile} id="nav">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href={"/"} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <button onMouseOver={() => toggleDropdown("about")}>
                About Us
              </button>
              <div
                ref={(el) => {
                  dropdownRefs.current["about"] = el;
                }}
                className={`${styles.dropdown} ${
                  activeDropdown === "about" ? `${styles.open}` : ""
                }`}
              >
                <ul className={styles.subMenuWrap}>
                  <li>
                    <Link
                      href={"/about-us/message-from-chairman"}
                      onClick={handleLinkClick}
                    >
                      Message from Chairman
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about-us/company-information"}
                      onClick={handleLinkClick}
                    >
                      Company Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about-us/team-members"}
                      onClick={handleLinkClick}
                    >
                      Team Members
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about-us/official-documents"}
                      onClick={handleLinkClick}
                    >
                      Official documents
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navItem}>
              <button onMouseOver={() => toggleDropdown("menu2")}>
                Services
              </button>
              <div
                ref={(el) => {
                  dropdownRefs.current["menu2"] = el;
                }}
                className={`${styles.dropdown} ${
                  activeDropdown === "menu2" ? `${styles.open}` : ""
                }`}
              >
                <ul>
                  <li>
                    <Link
                      href={
                        "/services/comprehensive-domestic-cleaning-services"
                      }
                      onClick={handleLinkClick}
                    >
                      Domestic Cleaning Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/commercial-cleaning-services"}
                      onClick={handleLinkClick}
                    >
                      Commercial Cleaning Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/light-rail-cleaning-services"}
                      onClick={handleLinkClick}
                    >
                      Transit & Facility Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/real-estate-development-services"}
                      onClick={handleLinkClick}
                    >
                      Real Estate Development Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/mep-services"}
                      onClick={handleLinkClick}
                    >
                      MEP Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/hvac-services"}
                      onClick={handleLinkClick}
                    >
                      HVAC Services
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link
                href={"/projects"}
                onMouseOver={() => toggleDropdown("projects")}
              >
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href={"/resources"}
                onMouseOver={() => toggleDropdown("resources")}
              >
                Resources
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href={"/contact-us"}
                onMouseOver={() => toggleDropdown("contact")}
              >
                Contact Us
              </Link>
            </li>
            <li className={`${styles.navItem}`}>
              <Link
                href={"/appointment"}
                onMouseOver={() => toggleDropdown("appointment")}
                className={styles.appointmentBtn}
              >
                Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
