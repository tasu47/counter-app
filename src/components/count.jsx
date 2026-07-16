
import '../styles/count.css'
import React, {useState} from "react";

function Counter (){
    const[count, setCount] = useState(0);
    return(
  
    
 <div className="showCountNumber">
  <div className="heading">✨Counter App✨</div>
  <div className="show">
 <p> ⭐{count} ⭐</p>
  </div>
     
      <button className='btn1' onClick={() => setCount(count +1) }>Increase</button>
        <button className='btn2' onClick={() => setCount(0)}>Zero</button>
      <button className='btn3' onClick={() => setCount(count -1)}>Decrease</button>
     
</div>


    )

}
export default Counter;