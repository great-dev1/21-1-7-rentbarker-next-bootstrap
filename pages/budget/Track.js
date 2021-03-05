export default function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: 8,
        zIndex: 1,
        marginTop: 36,
        backgroundColor: '#279d97',
        borderRadius: 5,
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  )
}