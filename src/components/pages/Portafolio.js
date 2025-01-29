import React, { useState } from "react";
import '../../App.css'
import AddWork from "./portafolioList/AddWork";
import WorkList from "./portafolioList/WorkList"


export default function Portafolio () {
    const [ addWork, setAddWork ] = useState(initialWorks)

    function handleAddWork (art){
        setAddWork([
            ...addWork, {id: nextId++, name: art, viewed: false
            }
    ])}
    function handleChangeWork(work){
        setAddWork(addWork.map((art)=>{
            if(art.id === work.id) {
                return work
            } else {
                return art
            }
        }))
    }
    function handleDeleteWork(dele){
        setAddWork(addWork.filter((f)=> f.id !== dele))
    }
    return (
    <>
   
    <h1 className="portafolio">PORTAFOLIO</h1>


    <h2 className="">Your Requests</h2>
    <AddWork handleAddWork={handleAddWork}/>
    <WorkList handleChangeWork={handleChangeWork} addWork={addWork} handleDeleteWork={handleDeleteWork} />
    
    </>
    )

}

let nextId = 3
let initialWorks = [
    {id:0, name: "House", viewed: true },
    {id:1, name: "Building", viewed: false },
    {id:2, name: "Old House", viewed: false },
]