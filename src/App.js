import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
let ThemeContext = React.createContext("dark")

function App() {
  let context = React.useContext(ThemeContext)
  let [age, setAge] = useState(19)
  let [siblingsNum, setSiblingsNum] = useState(10)
  let [state, setState] = useState({age:19, siblings:10})
  let [count, setCount] = useState(0)
  let [title, setTitle] = useState(0)
  let get_older = () =>  {setAge(age+1)}
  let get_sibling = () =>{
    return setSiblingsNum(siblingsNum+1)
  }
  let get_older2 = () => {
    setState (prev=>{
      return{ ...prev, age: prev.age+1}
    })
  }
  let get_sibling2 = () =>{
    setState((prev) => {
      return { ...prev, siblings: prev.siblings+1}
    })
  }
  let update_Title = () => {
    setTitle(title+1)
  }
  useEffect (()=>{
    document.title = 'Title changed '+title+" times"
  },[title])
  return <>
    <div className='Age_Sibling'>
      <h1>Multiple State</h1>
      <div className='Age'>Today I am {age} Years of Age</div>
      <div className='Siblings'>I have {siblingsNum} siblings</div>
      <div className='Button'>
        <button onClick={get_older}>Get older!</button>
        <button onClick={get_sibling}>More siblings!</button>
      </div>
    </div>
    <div className='Age_Sibling'>
      <h1>Use Object State</h1>
      <div className='Age'>Today I am {state.age} Years of Age</div>
      <div className='Siblings'>I have {state.siblings} siblings</div>
      <div className='Button'>
        <button onClick={get_older2}>Get older!</button>
        <button onClick={get_sibling2}>More siblings!</button>
      </div>
    </div>
    <div className='Count'>
      <h1>Initialize state from function</h1>
      <div className='count'>Count value is: {count}</div>
      <div className='Button'>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count+1)}>Plus (+)</button>
        <button onClick={() => setCount(count-1)}>Minus (-)</button>
      </div>
    </div>
    <div className='changeTitle'>
      <h1>Update title of the page</h1>
      <div className='count'>look at the title of the current tab in the browser</div>
      <div className='Button'>
        <button onClick={update_Title}>Update Title!!</button>
      </div>
    </div>
    <div className='Context'>
      <h1>useContext</h1>
      <h2>Context value: {context}</h2>
    </div>
  </>
}

export default App;
