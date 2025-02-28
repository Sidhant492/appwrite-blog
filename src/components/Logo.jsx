import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-36 h-36 rounded-full border-4 border-gray-600 object-cover"
        style={{ width: '100px', height: '100px' }}
      />

    </div>
  )
}

export default Logo
