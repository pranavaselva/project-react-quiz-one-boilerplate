import { Component } from "react";


class ResultComponent extends Component{
    constructor(){
        super()
    }
    
    render(){
        return(
        <div>
            <div className="whole">
                <p className="result">Result</p>
                <div className="main">
                    <div className="top">
                    <p className="you">You need more practice!</p>
                    <h1 className="score">Your score is 20%</h1>
                    </div>
                    <div className="total">
                        <p>Total number of questions</p>
                        <p>15</p>
                    </div>
                    <div className="total">
                        <p>Number of attempted quesitons</p>
                        <p>9</p>
                    </div>
                    <div className="total">
                        <p>Number of wrong answers</p>
                        <p>6</p>
                    </div>
                </div>

                <div className="resultBtn">
                    <button className="again">Play Agian</button>
                    <button className="backhome">Back to Home</button>
                </div>
            </div>
         </div>
        )
    }
}


export default ResultComponent;