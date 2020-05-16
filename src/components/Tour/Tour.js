import React from 'react'
import { useQuery } from 'graphql-hooks'
import './Tour.css'

import Tickets from './Tickets'

const TOUR_QUERY = `query MyQuery {
  allTours {
    id
    date
    location
    linkEvent
  }
}`

function Tour () {
  const { loading, error, data } = useQuery(TOUR_QUERY)

  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  const allTours = data.allTours.map(tour => (
    <Tickets
      key={tour.id}
      date={tour.date}
      location={tour.location}
      link={tour.linkEvent}
    />
  ))

  return (
    <div id='tour' className='margin-reduit'>
      <h2>TOUR</h2>
      {allTours}
    </div>
  )
}

export default Tour
