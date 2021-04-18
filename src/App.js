import './App.css';
import Header from './component/Header';
import { Todos } from './component/todos';
import { Footer } from './component/footer';
import React, { useState, useEffect } from 'react';
import { Add_list } from './component/Add_list';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './component/About';

function App() {
  let initTodo
  if (localStorage.getItem("todos" )=== null) {
    initTodo = [];

  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("This has been deleted", todo)
    // let index=todos.indexOf(todo);
    // todos.splice(index,1)
    setTodos(todos.filter((e) => {
      return e != todo
    }));
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, description) => {
    console.log("Event is added", title, description);
    let serial_no;
    if (todos.length === 0) {
      serial_no = 0
    }
    else {

      serial_no = todos[todos.length - 1].serial_no + 1;
    }
    const myTodo = {
      serial_no: serial_no,
      title: title,
      description: description,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    // if(localStorage.getItem("todos")===undefined){

    // }
  }
  const [todos, setTodos] = useState(initTodo);
  // {
  //   serial_no: 1,
  //   title: "Study",
  //   description: "Please learn React"
  // },
  // {
  //   serial_no: 2,
  //   title: "Eat",
  //   description: "Go have your lunch"
  // },
  // {
  //   serial_no: 3,
  //   title: "Help",
  //   description: "Help Your Parents"
  // }
  // );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
    <Router>
      <Header title="Alek List" searchBar={true} />
      <Switch>
          <Route exact path="/" render={()=>{
            return  (
            <>
            <Add_list addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /></>
          )}}>
         
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>
      

      <Footer />
      </Router>
    </>
  );
}

export default App;
