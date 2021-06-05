// This is a footer for subpages

import Link from 'next/link'

import styles from './Footer_1.module.css'

export default function Footer_1() {
  return (
    <footer>
      <div className={styles.footer_desktop}>
        <div className={styles.container}>
          <div className={styles.footer_top}>
            <Link href="/">
              <a>
                <img src="/footer/logo.png" alt="logo" />
              </a>
            </Link>
            <div className={styles.footer_links}>
              <Link href="/landlord">
                <a className={styles.footer_link}>Landlords</a>
              </Link>
              <Link href="/faq">
                <a className={styles.footer_link}>FAQs</a>
              </Link>
              <Link href="/contact">
                <a className={styles.footer_link}>Contact Us</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footer_mid}>
          <div className={styles.container}>
            <div className={styles.footer_mid_content}>

              <Link href="/privacy">
                <a className={styles.footer_privacy}>Privacy & Terms</a>
              </Link>

              <div className={styles.social_links}>
                <Link href="">
                  <div>
                    <img src="/footer/twitter.png" alt="twitter" />
                    <a className={styles.social_link}>Twitter</a>
                  </div>
                </Link>
                <Link href="">
                  <div>
                    <img src="/footer/instagram.png" alt="instagram" />
                    <a className={styles.social_link}>Instagram</a>
                  </div>
                </Link>
                <Link href="">
                  <div>
                    <img src="/footer/facebook.png" alt="facebook" />
                    <a className={styles.social_link}>Facebook</a>
                  </div>
                </Link>
                <Link href="">
                  <div>
                    <img src="/footer/linkedin.png" alt="linkedin" />
                    <a className={styles.social_link}>Linkedin</a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_mobile}>
        <Link href="/">
          <a className="my-4">
            <img src="/footer/logo.png" alt="logo" />
          </a>
        </Link>
        <div className={styles.footer_links_mobile}>
          <Link href="/landlord">
            <a className={styles.footer_link_mobile}>Landlords</a>
          </Link>
          <Link href="/">
            <a className={styles.footer_link_mobile}>Tenants</a>
          </Link>
          <Link href="/about">
            <a className={styles.footer_link_mobile}>About</a>
          </Link>
          <Link href="/faq">
            <a className={styles.footer_link_mobile}>FAQs</a>
          </Link>
          <Link href="/privacy">
            <a className={styles.footer_link_mobile}>Privacy & Terms</a>
          </Link>
          <Link href="/contact">
            <a className={styles.footer_link_mobile}>Contact Us</a>
          </Link>
        </div>

        <div className={styles.social_links_mobile}>
          <Link href="">
            <img className={styles.social_icon} src="/footer/twitter-mobile.png" alt="twitter" />
          </Link>
          <Link href="">
            <img className={styles.social_icon} src="/footer/facebook-mobile.png" alt="facebook" />
          </Link>
          <Link href="">
            <img className={styles.social_icon} src="/footer/instagram-mobile.png" alt="instagram" />
          </Link>
          <Link href="">
            <img className={styles.social_icon} src="/footer/linkedin-mobile.png" alt="linkedin" />
          </Link>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.container}>
          <p className="text-center text-md-left">
            ©2021 Barker, LLC.<br className="d-block d-md-none" />
            All rights reserved 2021. U.S. Patent Pending.
        </p>
        </div>
      </div>
    </footer>
  )
}