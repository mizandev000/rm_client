import Image from "next/image";
import Link from "next/link";
import styles from "../styles/component/_footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4 col-lg-4">
            <div className={styles.footerAbout}>
              <div className={styles.footerLogo}>
                <Image
                  className="logo"
                  width={200}
                  height={89}
                  src="/logo-whtie.png"
                  alt="Logo"
                />
              </div>
              <p>
                Experts on Melbourne, Sydney and interstate removals, we at Easy
                Peasy Removals are all about providing a hassle-free moving
                service, be it a house or office move.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4 col-lg-4">
            <div className={styles.footerMenu}>
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link href="/terms-and-conditions">Terms And Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4 col-lg-4">
            <div className={styles.footerMenu}>
              <h3>Contact</h3>
              <ul>
                <li>Phone: +64284215199</li>
                <li>Email: Info@rapidmovers.co.nz</li>
                <li>36 mathesons road philipstown, Christchurch 8011 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
