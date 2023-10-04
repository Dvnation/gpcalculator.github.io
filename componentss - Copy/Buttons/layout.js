import NumericButton from "./NumnericButton";
import './Button.css';


const ButtonIndex = ({click, clear, ON, Eval}) => {
    
    return (
        <div className="buttonlayout">
            <div className="button-keys">
                <button className="ano"
                    onClick={clear}>
                    C/CE
                </button>
                <button className="off">OFF</button>
                <button className="square-root">sqrt</button>
                <button className="percentage">%</button>


                <button className="MRC">MRC</button>
                <button className="M-">M-</button>
                <button className="Mr">M+</button>


                <div className="overall">
                    <div className="waysss">
                        <NumericButton number={0} onClick={click}/>
                        <NumericButton number={1}
                            onClick={click}/>
                        <NumericButton number={2}
                            onClick={click}/>
                        <NumericButton number={3}
                            onClick={click}/>
                        <NumericButton number={4}
                            onClick={click}/>
                        <NumericButton number={5}
                            onClick={click}/>
                        <NumericButton number={6}
                            onClick={click}/>
                        <NumericButton number={7}
                            onClick={click}/>
                        <NumericButton number={8}
                            onClick={click}/>
                        <NumericButton number={9}
                            onClick={click}/>

                    </div>

                    <div className="divine">
                        <button className="operator-key" data-action="multiply"
                            onClick={click}>*</button>
                        <button className="operator-key" data-action="subtract"
                            onClick={click}>-</button>
                        <button className="operator-key"
                            onClick={click}>+</button>
                        <button className="operator-key"
                            onClick={click}>/</button>
                        <button className="point"
                            onClick={click}>.</button>
                        <button className="on"
                            onClick={ON}>ON</button>

                    </div>

                </div>
                <button className="equal-to"
                    onClick={Eval}>=</button>


            </div>

        </div>
    )
}

export default ButtonIndex;

