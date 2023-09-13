import './App.css'
import Header from './Header.jsx'
import Products from './Products';
import MyButton from './Button';
import {useState} from 'react';
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

const user = {
  name : 'Harshit Shankhdhar',
  age : 26,
  imageUrl : '../React-icon.png',
  imageSize : 100
}

export default function App() {

const [count, setCount] = useState(0);

  function clickHandler() { 
    setCount(count + 1);
  }

  return (
    <>
        <Header/>
        <p>This is react app created by {user.name}</p>
        <MyButton count={count} onClick={clickHandler}/> 
        {/* count and clickHandler are passed as props of MyButton component. */}
        <br />
        <br />
        <MyButton count={count} onClick={clickHandler}/>
        <br />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
      </div>
        <Products/>
    </>
  );
}
