import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singers'

function App() {

  const actors = ['sakib', 'raj', 'jasim', 'rubel']
  const singers = [
    {id:1, name: 'AB', age: 56},
    {id:2, name: 'ABC', age: 57},
    {id:3, name: 'ABCD', age: 58},
    {id:4, name: 'ABCDE', age: 59},
  ]

  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }



      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actors => <Actor name={actors}></Actor>)
      }
      {/* <Todo 
      task="Learn React" isDone={true}></Todo>
      <Todo
       task="Core Concepts" isDone={false}></Todo>
      <Todo
       task="Try JSX" isDone={true}></Todo> */}
      {/* <Person></Person>
      <Device name="Tab" price="10"></Device>
      <Device name="mobile" price="37"></Device>
      <Device name="PC" price="97"></Device>
      <Student grade="7" score="96"></Student>
      <Student grade={12} score="48"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props);
  return (
    <div>
      <h2>Device Info: {props.name} price: {props.price} </h2>
    </div>
  )
}

function Person(){
  const age = 25
  const money = 25
  const person = { name: "John Doe", age: 13}
  return <h3> I am {person.name} with age: {age + money} </h3>
}

const {grade, score} = {grade:'7', score: '96'}

function  Student ({grade=1, score=0}) {
  console.log(grade, score);
  return (
  <div className='student'>
    <h3>This is a Student</h3>
    <p>class: {grade}</p>
    <p>score: {score}</p>
  </div>
)}


function Developer(){
  const developerStyle = {
    margin: '16px',
    padding: '8px',
    border: '2px solid purple',
    borderRadius: '8px',
  }
  return(
    <div style={developerStyle}>
          <h5>Devo devo</h5>
          <p>Coding: </p>
    </div>
  )
}



export default App
