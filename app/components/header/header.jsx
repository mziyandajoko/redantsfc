import React from 'react'

function header() {
  return (
    <div className='flex flex-col md:justify-between px-20 py-5'>
        <nav className='flex justify-between'>
            <div>Logo</div>
            <div>Nav items</div>
        </nav>
    </div>
  )
}

export default header