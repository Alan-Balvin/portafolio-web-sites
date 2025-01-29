
import { useState } from "react";

function WorkList({ handleChangeWork, handleDeleteWork, addWork }) {
  return (
    <ul>
      {addWork.map((artistic) => (
        <li key={artistic.id}>
          <ArtWork
            artistic={artistic}
            handleChangeWork={handleChangeWork}
            handleDeleteWork={handleDeleteWork}
          />
        </li>
      ))}
    </ul>
  );
}

export default WorkList;

function ArtWork({ artistic, handleChangeWork, handleDeleteWork }) {
    const [ newWork, setNewWork ] = useState(false);
    let workContent;
    if(newWork) {
        workContent = (
            <>
            <input type="text" 
            value={artistic.name}
            onChange={(e)=>{handleChangeWork({
                ...artistic, name: e.target.value
            })}}
            />
            <button onClick={()=>{setNewWork(false)}}>Save</button>
            </>
        )
    } else {
        workContent =(
            <>
            {artistic.name}
            <button onClick={()=>{setNewWork(true)}}>Edit</button>
            </>
        )
    }
  return <>
  <label>
    <input type="checkbox"
    checked={artistic.viewed} 
    onChange={(e)=>{handleChangeWork({
        ...artistic, viewed: e.target.checked
    })}}/>
    {workContent}
    <button onClick={()=>{handleDeleteWork(artistic.id)}}>Delete</button>
  </label>
  </>;
}
