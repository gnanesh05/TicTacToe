import React, { useState } from 'react'
import CircleIcon from '../assets/circle.png'
import CrossIcon from '../assets/cross.png'
import './TicTacToe.css'

let data = ["","","","","","","","",""];
const TicTacToe = () => {

    const[count, setCount] = useState(0);
    const[lock, setLock] = useState(false);
    const [msg, setMsg] = useState("");

    const toggle = (e,num)=>{
        if(lock)
         return 0;
        if(count%2===0){
           e.target.innerHTML =` <img src=${CircleIcon} alt="Circle" />`;
           data[num] = "X";
           setCount((prev)=>++prev);
        }
        else{
            e.target.innerHTML =`<img src=${CrossIcon} alt="Cross"/>`;
            data[num] = "O";
            setCount((prev)=>++prev);
        }
        checkWin();
    }

    const checkWin=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
           announceWin();
        else if(data[3]===data[4] && data[4]===data[5] && data[5] !=="")
           announceWin();
        else if(data[6]===data[7] && data[7]===data[8] && data[8] !=="")
            announceWin();
        else if(data[0]===data[3] && data[3]===data[6] && data[6] !=="")
            announceWin();
        else if(data[1]===data[4] && data[4]===data[7] && data[7] !=="")
            announceWin();
        else if(data[2]===data[5] && data[5]===data[8] && data[8] !=="")
            announceWin();
        else if(data[0]===data[4] && data[4]===data[8] && data[8] !=="")
            announceWin();
        else if(data[0]===data[1] && data[1]===data[2] && data[2] !=="")
            announceWin();
        else if(data[2]===data[4] && data[4]===data[6] && data[6] !=="")
            announceWin();
        
    }

    const announceWin = ()=>{
        setLock(true);
        if(count%2===0){
            setMsg("Winner is Circle");
        }
           
        else{
            setMsg("Winner is Cross");
        }
           
    }

    const reset = ()=>{
        setLock(false)
        setMsg('');
        setCount(0);
        data = ["","","","","","","","",""];
        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach((box)=>box.innerHTML = "");
       
    }


  return (
    <div className='container'>
       
        <h1 className="title">Tic Tac Toe using React</h1>
        <div className="board">
           <div className="row1">
             <div className="boxes" onClick={(e)=>toggle(e,0)}></div>
             <div className="boxes" onClick={(e)=>toggle(e,1)}></div>
             <div className="boxes" onClick={(e)=>toggle(e,2)}></div>
           </div>
           <div className="row2">
             <div className="boxes" onClick={(e)=>toggle(e,3)}></div>
             <div className="boxes" onClick={(e)=>toggle(e,4)}></div>
             <div className="boxes" onClick={(e)=>toggle(e,5)}></div>
           </div>
           <div className="row3">
             <div className="boxes" onClick={(e)=>toggle(e,6)}></div>
             <div className="boxes" onClick={(e)=>toggle(e,7)}></div>
             <div className="boxes" onClick={(e)=>toggle(e,8)}></div>
           </div>
        </div>
        { msg.length>0 ? (<h2 className='winner
        '>{msg}</h2>) : (<></>)}
        <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTacToe