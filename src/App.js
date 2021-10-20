
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos'; //when importing "rafc"
// import todo from './components/todo';
import Footer from './components/Footer'; //when importing "rafc"
import AddTodo from './components/AddTodo';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Deleted", todo);
    //Deleteing this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)



    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //use {useState} to update list dynamically

  const [todos, setTodos] = useState(initTodo);

  ///whenever todos got change "useEffect" will call the condition 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Jattland " searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>


        <Footer />
      </Router>
    </>
  );
}

export default App;
