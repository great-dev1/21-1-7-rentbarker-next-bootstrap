import Link from 'next/link'

import MyButton from '../MyButton'
import styles from './Choose.module.css'

export default function Choose() {
  return (
    <div className={styles.choose_section}>
      <h2 className={styles.choose_title}>Choose a better way to work</h2>
      <div className="d-sm-flex">
        <Link href="/">
          <a className={styles.tenant_btn}>
            <MyButton width="180px" height="48px" borderColor="#fff" color="#126660" backgroundColor="#fff">
              <span className="d-block d-sm-none text-uppercase">For Tenants</span>
              <span className="d-none d-sm-block text-capitalize">For Tenants</span>
            </MyButton>
          </a>
        </Link>

        <Link href="/landlord">
          <a className="">
            <MyButton width="180px" height="48px" borderColor="#fff" color="#fff" backgroundColor="#126660">
              <span className="d-block d-sm-none text-uppercase">For Landlords</span>
              <span className="d-none d-sm-block text-capitalize">For Landlords</span>
            </MyButton>
          </a>
        </Link>
      </div>
    </div>
  )
}