import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex justify-evenly mb-8">
  <div className="grid grid-cols-2 gap-4">
    <Link to='/cars' className="btn btn-outline btn-primary">Cars</Link>
    <Link className="btn btn-outline btn-secondary">Employees</Link>
    <Link className="btn btn-outline btn-primary">Services</Link>
    <Link className="btn btn-outline btn-accent">Travellers</Link>
  </div>
</div>
  )
}

export default Home