import { Card, Row, Col } from 'react-bootstrap'

import styles from './PropertyCard.module.css'

export default function PropertyCard({
  added = false,
  img = '/property/property-1.jpg',
  price = '1775',
  name = 'Unit Name',
  address = '4845 Saturn st, Los Angeles, CA 90019',
  bed = '2',
  bath = '2',
  size = '89',
}) {
  return (
    <Card className={styles.property_card}>
      <a className={styles.action_btn}>
        {added ? <img src="/property/del-icon.png" alt="delete" /> : <img src="/property/add-icon.png" alt="add" />}
      </a>
      <Card.Img className={styles.property_img} variant="top" src={img} alt="property" />
      <Card.Body className={styles.property_body}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className={styles.property_name}> {name} </h3>
          <h4 className={styles.property_price}> ${price} </h4>
        </div>
        <h4 className={styles.property_address}> {address} </h4>
        <div className={styles.property_feature}>
          {bed}
          <img className={styles.feature_icon} src="/property/bed-icon.png" alt="bed" />
          <span className={styles.splitbar}>|</span>

          {bath}
          <img className={styles.feature_icon} src="/property/bath-icon.png" alt="bath" />
          <span className={styles.splitbar}>|</span>

          {size} M<sup className={styles.sup}>2</sup>
          <img className={styles.feature_icon} src="/property/size-icon.png" alt="size" />
        </div>
        <div className={styles.property_amenity}>
          <h4 className={styles.amenity_title}>AMENITIES</h4>
          <Row>
            <Col xs={6}>
              <li className={styles.amenity_item}>
                On-site Laundary
              </li>
            </Col>
            <Col xs={6}>
              <li className={styles.amenity_item}>
                Off-street Parking
              </li>
            </Col>
            <Col xs={6}>
              <li className={styles.amenity_item}>
                Dishwasher
              </li>
            </Col>
            <Col xs={6}>
              <li className={styles.amenity_item}>
                Hardwood Floors
              </li>
            </Col>
          </Row>
        </div>
        <a className={styles.add_link} href="#">
          + ADD UNIT PREFERENCE
        </a>
      </Card.Body>
    </Card>
  )
}