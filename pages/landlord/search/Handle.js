export default function Handle({
  handle: { id, percent },
  getHandleProps,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${percent}%`,
        zIndex: 2,
        width: 22,
        height: 22,
        marginTop: 20,
        marginLeft: -10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#279d97',
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}
      {...getHandleProps(id)}
    >
    </div>
  )
}