import React, { use } from 'react'
import Card from './Card'
const cardsdata = fetch('/teachers.json').then(res => res.json())
const Cards = () => {
  const cards = use(cardsdata)
  console.log(cards)
  return (
    <div className="">
      <p className='text-4xl font-bold text-center mt-20 my-10'>Popular Skills</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 p-3.5 grid-cols-1 gap-5">

        {
          cards.map(card => <Card card={card}></Card>)
        }
      </div>
    </div>
  )
}

export default Cards