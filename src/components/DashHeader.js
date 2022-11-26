import { Link } from 'react-router-dom'
import React from 'react'

const DashHeader = () => {
  const content = (
    <header className='dash-header'>
        <div className='div-header__container'>
            <Link to="/dash">
                <h1 className='dash-header__title'>techNotes</h1>
            </Link>
            <nav className='dash-header__nav'>
                {/* Add Nav Buttons here */}
            </nav>
        </div>
    </header>
  )
  return content
}

export default DashHeader