import { Button } from 'react-bootstrap'

import styles from './MyButton.module.css'

export default function MyButton({ children, green, width = '150px', height = '50px', margin = '12px', ...rest }) {
  return (
    <div>
      {green ? (
        <Button className={styles.green_btn} style={{ width, height, margin }} {...rest}>
          {children}
        </Button>
      ) : (
          <Button className={styles.white_btn} style={{ width, height, margin }} {...rest}>
            {children}
          </Button>
        )}
    </div>
  )
}