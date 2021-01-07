import { Card } from 'react-bootstrap'

import MyButton from '../../components/MyButton'
import styles from './OfferCard.module.css'

export default function OfferCard({
  img = '/offer/offer-1.jpg',
  name = 'Property Name',
  address = '1234 S Main St, Los Angeles, CA',
  cost = '$ Avg. Net Monthly Cost',
  deposit = '$ Security Deposit',
}) {
  return (
    <Card className={styles.offer_card}>
      <Card.Img className={styles.card_img} variant="top" src={img} alt="offer" />
      
      <Card.Body>
        <h3 className={styles.offer_name}> {name} </h3>
        <h4 className={styles.offer_address}> {address} </h4>
        <h4 className={styles.offer_cost}> {cost} </h4>
        <h4 className={styles.offer_deposit}> {deposit} </h4>
        <MyButton blue width="100%" height="44px" margin="0">VIEW OFFER</MyButton>
      </Card.Body>
    </Card>
  )
}