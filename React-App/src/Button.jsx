// import { useState } from 'react'; // For adding state to the component

function MyButton({ count, onClick}){
    // const [count, setCount] = useState(0); 

    /* useState return current a state(count) 
        & a function to update state i.e setCount */

    // function clickHandler() {
    //   alert('You clicked me!');
    //   setCount(count + 1);
    // }
    return(
    <>
        <button className='roundBorder' onClick = {onClick}>
            clicked {count} times!
        </button>
    </>  
    )
  }

  export default MyButton