export default function Handle({
  handle: { id, value, percent },
  getHandleProps,
  budget,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${percent}%`,
        zIndex: 2,
        width: 32,
        height: 32,
        marginTop: 23,
        marginLeft: -15,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#279d97',
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}
      {...getHandleProps(id)}
    >
      <div
        style={{
          width: 100,
          marginTop: 36,
          marginLeft: -35,
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: 0.5,
          color: '#126660'
        }}
      >
        {budget ? `$${value}` : `${value} months`}
      </div>
    </div>
  )
}