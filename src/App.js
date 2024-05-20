import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {

 <NotificationContainer />
  let [todoList, setTodolist] = useState([]);

 
  let saveToDolist = (event) => {
    let todo = event.target.todo.value;
    if (!todoList.includes(todo)) {
      let finaltodo = [...todoList, todo]
      setTodolist(finaltodo);
    }
    else {
      alert("ToDo name already exists! ")
    }
    event.preventDefault();
  }

  let additems = todoList.map((value,index)=>{
    return(
      <TodolistItems  value={value} key={index} indexnu={index}
      todoList={todoList} setTodolist={setTodolist}
      /> 
    )
  })
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveToDolist}>
        <input type="text" name="todo" /><button>Save</button>
      </form>

      <div className="outerdiv">
        <ul>
          {additems}
        </ul>
      </div>

    </div>
  );
}

export default App;
function TodolistItems({value,indexnu,todoList,setTodolist}){

  let[check,setcheck]=useState(false);
  let deleteRow=()=>{
    let finaldata = todoList.filter((v,i)=>i!=indexnu)
    setTodolist(finaldata)
  }

  let checkStatus=()=>{
    setcheck(!check)
  }
  return(
    <li className={(check)?'complete':''} onClick={checkStatus}> {indexnu+1} {value}<span onClick={deleteRow}>&times;</span></li>
  )
}