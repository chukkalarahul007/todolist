import React, {useState} from "react";
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ToDoList from "./ToDoList"

const App=()=>{

    const [item,setItem]=useState("");
    const [itemList,setItemList]=useState([]);
    

    const inputEvent=(event)=>{
        setItem(event.target.value);
    }

    const listOfItems=()=>{
        setItemList((prevValue)=>{
            return([...prevValue,item]);
        });
        setItem("");
    }

  

    return(<>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDoList</h1>
                <br/>
                <input type="text" placeholder="Add a Task" value={item} onChange={inputEvent}/>
                <Button onClick={listOfItems} className="newBtn">
                    <AddTaskIcon fontSize="medium"/>
                </Button>
                <ol>
                    {
                        itemList.map((itemval,index)=>{
                        return (<ToDoList task={itemval} key={index} id={index}  />);
                    })
                    }
                </ol>
            </div>
        </div>

    </>
    );
}

export default App;