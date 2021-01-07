import { Card } from 'react-bootstrap'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './ImageCard.module.css'

export default function ImageCard({
  number = 1,
  img = '/property/property-1.jpg',
  name = 'Palazzo Dallas Apartments',
  address = '123 Main St., Dallas, TX75225',
  phone = '(972) 555-7777',
  bed = '1-2',
  bath = '1',
  size = '530-800'
}) {
  return (
    <Card className={styles.property_card}>
      <div className={styles.property_number}> {number} </div>
      <div className={styles.delete_btn}>
        <FontAwesomeIcon icon={faTrashAlt} className={styles.delete_icon} />
      </div>
      <Card.Img className={styles.card_img} variant="top" src={img} alt="property" />
      <Card.Body>
        <h3 className={styles.property_name}> {name} </h3>
        <h4 className={styles.property_address}> {address} </h4>
        <h4 className={styles.property_address}> {phone} </h4>
        <div className={styles.property_feature}>
          <img className={styles.feature_icon} src="/property/bed-icon.png" alt="bed" />
          {bed} <span className={styles.splitbar}>|</span>

          <img className={styles.feature_icon} src="/property/bath-icon.png" alt="bath" />
          {bath} <span className={styles.splitbar}>|</span>

          <img className={styles.feature_icon} src="/property/size-icon.png" alt="size" />
          {size} sqft
        </div>
        <hr className={styles.hr} />
        <a className={styles.add_link} href="#">ADD UNIT PREFERENCE</a>
      </Card.Body>
    </Card>
  )
}