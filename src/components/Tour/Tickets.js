import React from 'react'
import './Tickets.css'

const Tickets = ({ date, location, link }) => {
  const dateIsoFormat = new Date(date)
  const dateTable = dateIsoFormat.toDateString().split(' ').slice(1)
  const dateFormated = `${dateTable[1]} ${dateTable[0].toUpperCase()} ${dateTable[2]}`

  return (
    <div className='tickets'>
      <span className='date'>{dateFormated}</span>
      <span className='location'>{location}</span>
      <a href={link} target='_blank' rel='noopener noreferrer'><button className='buttonTicket'><span>TICKETS </span></button></a>
    </div>
  )
}

export default Tickets
