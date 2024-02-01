import { Component } from "react";

class QuizComponent extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="container">
                <h1 className="head">Question</h1>
                <p className="number">1 of 15</p>
                <p className="ques">Which is the only mammal that cannot jump?</p>
                <div className="options">
                    <div className="choice">
                        <p>Dog</p>
                    </div>
                    <div className="choice">
                        <p>Elephant</p>
                    </div>
                    <div className="choice">
                        <p>Goat</p>
                    </div>
                    <div className="choice">
                        <p>Lion</p>
                    </div>
                </div>

                <div className="buttons">
                    <button className="prev">Previous</button>
                    <button className="nex">Next</button>
                    <button className="qui">Quit</button>
                </div>
            </div>
        )
    }
}

export default QuizComponent;