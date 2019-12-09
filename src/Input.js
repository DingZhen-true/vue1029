import React , {Component} from "react"

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            inputVal:this.props.name
        }
    }
    setVal(e){
        this.setState({
            inputVal:e.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text"  onChange={(e) => {this.setVal(e)}} value={ this.state.inputVal} />
                <p style={{color:this.props.name}}>input的颜色</p>
            </div>
            
        )
    }
}