import styles from './MyButton.module.css'

export default function MyButton({
  width = '218px',
  height = '44px',
  margin = '0',
  borderColor = '#126660',
  color = '#ffffff',
  backgroundColor = '#126660',
  children = 'SUBMIT',
  ...rest
}) {
  return (
    <div
      className={styles.btn_style}
      style={{ width, height, margin, borderColor, color, backgroundColor }}
      {...rest}
    >
      {children}
    </div>
  )
}