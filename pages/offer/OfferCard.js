import Link from 'next/link'
import { Card, Row, Col } from 'react-bootstrap'

import styles from './OfferCard.module.css'

export default function OfferCard({
  status = 'available',
  img = '/property/property-1.jpg',
  price = '1775',
  name = 'Unit Name',
  address = '4845 Saturn st, Los Angeles, CA 90019',
  bed = '2',
  bath = '2',
  size = '89',
}) {
  return (
    <Card className={styles.offer_card}>
      <Card.Img className={styles.offer_img} variant="top" src={img} alt="property" />
      <Card.Body className={styles.offer_body}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className={styles.offer_name}> {name} </h3>
          <h4 className={styles.offer_price}> ${price} </h4>
        </div>
        <h4 className={styles.offer_address}> {address} </h4>
        <div className={styles.offer_feature}>
          {bed}
          <img className={styles.feature_icon} src="/property/bed-icon.png" alt="bed" />
          <span className={styles.splitbar}>|</span>

          {bath}
          <img className={styles.feature_icon} src="/property/bath-icon.png" alt="bath" />
          <span className={styles.splitbar}>|</span>

          {size} M<sup className={styles.sup}>2</sup>
          <img className={styles.feature_icon} src="/property/size-icon.png" alt="size" />
        </div>
        <div className={styles.offer_amenity}>
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

        {status === 'available' &&
          <Link href="/offer/review">
            <a className={styles.view_link}>VIEW OFFER</a>
          </Link>
        }
        {status === 'unavailable' &&
          <p className={styles.unavailable}>NO UNITS AVAILABLE</p>
        }
        {status === 'pending' &&
          <p className={styles.pending}>OFFER PENDING...</p>
        }
      </Card.Body>
    </Card>
  )
}