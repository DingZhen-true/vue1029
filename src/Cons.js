import React,{Component} from "react";
import PropTypes from "prop-types";

class Context extends Component{
   
    static contextTypes = {
        themecolor : PropTypes.string
    }
    render(){
        return(
            <button>{this.context.themecolor}</button>
        )
    }
}
export default Context