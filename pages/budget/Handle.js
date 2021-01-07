export default function Handle({
  handle: { value, percent },
  getHandleProps,
  budget,
}) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: -15,
        marginTop: 25,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#f36b16',
      }}
      {...getHandleProps()}
    >
      <div style={{ width: 90, fontSize: 18, fontWeight: 'bold', marginTop: 45, marginLeft: -30 }}>
        {budget ? `$${value}` : `${value} months`}
      </div>
    </div>
  )
}