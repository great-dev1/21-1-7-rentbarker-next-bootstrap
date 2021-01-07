import { Button } from 'react-bootstrap'

import styles from './CreditCircle.module.css'

export default function CreditCircle({ children }) {
  return (
    <Button className={styles.credit_circle}>
      {children}
    </Button>
  )
}