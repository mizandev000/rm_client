"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/component/_header.module.scss";
import PhoneIcon from "../Icon/PhoneIcon";

export default function Nav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
  };

  return (
    <nav className={styles.navbar} id="nav">
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={"/"} onMouseOver={() => toggleDropdown("home")}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/about-us"} onMouseOver={() => toggleDropdown("home")}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <button onMouseOver={() => toggleDropdown("menu2")}>Services</button>
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
                <Link href={`/service/local-moving`} onClick={handleLinkClick}>
                  Local Moving
                </Link>
              </li>
              <li>
                <Link
                  href={`/service/cleaning-decluttering`}
                  onClick={handleLinkClick}
                >
                  Cleaning and Decluttering Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/service/single-item-movers`}
                  onClick={handleLinkClick}
                >
                  Single Item Movers
                </Link>
              </li>
              <li>
                <Link
                  href={`/service/office-furniture-moving`}
                  onClick={handleLinkClick}
                >
                  Office Furniture Moving Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/service/long-distance-moving`}
                  onClick={handleLinkClick}
                >
                  Long Distance Moving Services
                </Link>
              </li>

              <li>
                <Link
                  href={`/service/house-relocation`}
                  onClick={handleLinkClick}
                >
                  House Relocation Services
                </Link>
              </li>

              <li>
                <Link
                  href={`/service/piano-shifting`}
                  onClick={handleLinkClick}
                >
                  Piano Shifting Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/service/nort-south-island-moving`}
                  onClick={handleLinkClick}
                >
                  North & South Island Moving
                </Link>
              </li>
              <li>
                <Link
                  href={`/service/bike-car-boat-transport`}
                  onClick={handleLinkClick}
                >
                  Bike, Car & Boat Transport
                </Link>
              </li>
              <li>
                <Link
                  href={`/service/kitchen-cabinet-delivery`}
                  onClick={handleLinkClick}
                >
                  Kitchen Cabinet Delivery
                </Link>
              </li>
              <li>
                <Link href={`/service/senior-movers`} onClick={handleLinkClick}>
                  Senior Movers
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* <li className={styles.navItem}>
          <Link
            href={"/cubic-meter-calculator"}
            onMouseOver={() => toggleDropdown("projects")}
          >
            Moving Cost
          </Link>
        </li> */}

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
            href={"/moving-quote"}
            onMouseOver={() => toggleDropdown("appointment")}
            className={styles.appointmentBtn}
          >
            Get A Quote
          </Link>
        </li>
        <li className={`${styles.navItem} ${styles.callUs}`}>
          <Link href="tel:+64284215199" className={styles.appointmentBtn}>
            <PhoneIcon Color="white" />
            Call Us: +64284215199
          </Link>
        </li>
      </ul>
    </nav>
  );
}
