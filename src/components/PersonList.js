import React from 'react'

function PersonList() {

        let name = ["jagdish","Shubahm","Maulik"]
        const studentName = name.map(name => <h1>{name}</h1> )
    
    
  return (
    <div>
      {studentName}
    </div>
  )
}

export default PersonList
