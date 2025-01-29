import React, { useState } from 'react'

function AddWork({handleAddWork}) {
    const [ addArt, setAddArt ] = useState('')
  return (
    <div>
        <input type="text"
        value={addArt}
        placeholder='Add work' 
        onChange={(e)=>{setAddArt(e.target.value)}}
        />
        <button onClick={()=>{setAddArt('');
            handleAddWork(addArt)
        }}>Add New Work</button>

    </div>
  )
}

export default AddWork