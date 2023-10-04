import {useContext, useEffect, useRef, useState} from "react";
import ButtonIndex from "./Buttons/layout";
import App, { userman } from "../App";
import NumericButton from "./Buttons/NumnericButton";


function Screen({props, number}) {
   
//  calm = Object.assign({}, check)    
    

    let [num, setNum] = useState("enter a number")
    let [result, setResult] = useState("")

    let [screenValue, setScreen] = useState('');

    useEffect(() => {
      const result =   getResultFromStorage()
      setScreen(result)
    
    //   console.log(calm);
    //   console.log(divine.name);
    }, [])

    // const Eval = () => {
    //     if (num.includes("+") || num.includes("-") || num.includes("/") || num.includes("*")) {
    //         localStorage.clear("number")
    //         setResult(result = eval(num))
    //         localStorage.setItem("result", result)
    //         setNum(num = result)
    //         console.log(result);
    //     } else {
    //         setNum(num = num)
    //     }
    // }


    let clear = () => {
        setScreen("")
        localStorage.removeItem("number")
        localStorage.clear("result")
    }

    const ON = () => {
        setNum(num = "enter a number")
    }

    // function Btnvalue(e) {


    //     setNum(num = e.target.innerHTML.trim())


    //     let LocalStorageValue = JSON.parse(localStorage.getItem("number") || "[]");
    //     LocalStorageValue.push(num);
    //     localStorage.setItem("number", JSON.stringify(LocalStorageValue))
    //     setNum(num = LocalStorageValue.join(""))


    // }

    let onButtonClick = (e) => {
        const oldValue = e.target.innerHTML.trim();
        const newValue = screenValue.concat(oldValue)
        setScreen(screenValue = newValue)
    }

    const newEval = () => {
        if (screenValue.includes("+") || screenValue.includes("-") || screenValue.includes("/") || screenValue.includes("*")) {
            setScreen(eval(screenValue).toString())
            saveResultToStorage(eval(screenValue).toString());
        } else {
            setScreen(screenValue)
        }
    }

    const saveResultToStorage = (result) => {
      localStorage.setItem('result', result);
    }

    const getResultFromStorage = () => {
        return localStorage.getItem('result') || "";
    }

    // <App click = {scam}/>
const you =()=>{
   let i=0
    while (i<2000)i++ ;
    return console.log("my name");
}

    return (
        <>
        {/* <div className="waysss">
                        <NumericButton number={1111} onClick={scam}/>
      
            <NumericButton number={0} onClick={scam}/>
            </div> */}


            <div> 

                <input type="text" className="input-glass" value ={screenValue}
                    onChange={
                        (e) => {
                            setNum(e.target.value)
                        }
                    }
                    readOnly={false}></input>

<button onClick={you}>CLICK ME</button>
            <ButtonIndex 
            click = {onButtonClick}
                clear={clear}
                ON={ON}
                Eval={newEval}/>

        </div>


    </>
    )
}

export default Screen
