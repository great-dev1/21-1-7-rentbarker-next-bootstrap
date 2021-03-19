import styles from './CreditScoreBar.module.css'

export default function CreditScoreBar({ credit = '680-719' }) {
  let step;

  switch (credit) {
    case "639-":
      step = 0;
      break;
    case "640-679":
      step = 1;
      break;
    case "680-719":
      step = 2;
      break;
    case "720-":
      step = 3;
      break;
    default:
      step = 3;
  }

  return (
    <div>
      {step === 0 && <input className={styles.slider_0} type="range" min="0" max="3" value={step} />}
      {step === 1 && <input className={styles.slider_1} type="range" min="0" max="3" value={step} />}
      {step === 2 && <input className={styles.slider_2} type="range" min="0" max="3" value={step} />}
      {step === 3 && <input className={styles.slider_3} type="range" min="0" max="3" value={step} />}
    </div>
  )
}