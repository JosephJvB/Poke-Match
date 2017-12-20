import React from 'react'

const HallOfFame = (props) => {
  const style = { height: 100, width: 100 }
  return (
    <div >
      <img style={style} src={`https://${props.HoF[0]}`} /><img style={style} src={`https://${props.HoF[1]}`} /><img style={style} src={`https://${props.HoF[2]}`} /> <img style={style} src={`https://${props.HoF[3]}`} /><img style={style} src={`https://${props.HoF[4]}`} /> <img style={style} src={`https://${props.HoF[5]}`} /><img style={style} src={`https://${props.HoF[6]}`} /> <img style={style} src={`https://${props.HoF[7]}`} />
    </div>
  )
}

export default HallOfFame
