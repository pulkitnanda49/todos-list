import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Todos from './components/todos'; //when importing "rafc"
// import todo from './components/todo';
import Footer from './components/footer'; //when importing "rafc"
import AddTodo from './components/addTodo';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("Deleted", todo);
    //Deleteing this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  //use {useState} to update list dynamically

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market"
    },
    {
      sno: 2,
      title: "Kuchh bhi 2",
      desc: "desc 2"
    },
    {
      sno: 3,
      title: "kuchh bhi 3",
      desc: "desc 3"
    }
  ]);
  return (
    <>
      <Header title="Jattland " searchBar={true} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
