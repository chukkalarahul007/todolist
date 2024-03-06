import React,{useState} from "react"

import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList=(props)=>{

    const [line,setLine]=useState(false);

    const cutIt=()=>{
        setLine(true);
    }

    return( 
        <>
            <div className="todo_style">
                <span  onClick={cutIt}> 
                    <DeleteIcon className="deletelcon" /> 
                </span>
                <li style={{textDecoration: line? "line-through" : "none"}}>{props.task}</li>
            </div>
            
        </>
    );
}

export default ToDoList;