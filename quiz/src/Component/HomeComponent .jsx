import { Component } from "react"

class HomeComponent extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1 className="heading">Quiz App</h1>
                <button className="playBtn">Play</button>
            </div>
        )
    }
}

export default HomeComponent;