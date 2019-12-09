import React from 'react';
import PropTypes from "prop-types";



class ShoppingList extends React.Component {

  constructor(props) {
    super(props)
    console.log("apps constructor")
    this.state = {
      aaaa: this.props.name,
      time: new Date(),
      timeId: ""
    }
    this.state.timeId = setInterval(() => { this.setTime() }, 1000)

  }
  static propTypes = {
    default: PropTypes.string
  }
  static defaultProps = {
    default: "默认显示"
  }
  static contextTypes = {
    themecolor: PropTypes.string,
    setThemecolor: PropTypes.func
  }
  setTime() {
    this.setState({
      time: new Date()
    })
  }
  // componentWillMount(){

  //   console.log("apps组件将要加载")
  // }
  // componentWillReceiveProps(e){
  //   console.log("apps接收父组件参数")
  // }
  // componentWillUpdate(e,f){
  //   console.log("apps主动更新")
  // }
  static getDerivedStateFromProps(n, p) {  //willMount，willReceiveProps，willUpdate整合，其余执行顺序为改变
    console.log(n)
    console.log(p)
    return n
  }
  getSnapshotBeforeUpdate() {
    console.log("获取更新前快照")
    return "快照"  //return的值是componentDidUpdate的第三个参数
  }
  componentDidMount() {
    console.log(this.state)
    console.log("apps组件加载完成")
  }

  shouldComponentUpdate(e, f) {
    console.log("apps是否更新")
    let statu = false
    this.state.time.getSeconds() % 2 === 0 ? statu = true : statu = false
    return statu
  }
  componentDidUpdate(e, f, g) {
    console.log("apps主动更新完毕")
  }
  componentWillUnmount() {
    console.log("apps卸载")
    clearInterval(this.state.timeId)
  }
  render() {
    console.log("apps render")
    console.log(this.context)
    return (
      <div className="shopping-list">
        <ul>
          <li>{this.props.name}</li>
          <p style={{ color: this.props.name }}>Apps的颜色</p>
          <button onClick={() => { this.props.setColor(this.props.name === "blue" ? "gray" : "blue") }}>Apps按钮</button>
          <p>{this.state.time.getSeconds()}</p>
          <p>{this.props.default}</p>
          <p>{this.context.themecolor}</p>
          <button onClick={() => this.context.setThemecolor("red")} style={{color: this.context.themecolor}}>red</button>
        <button onClick={() => this.context.setThemecolor("blue")} style={{color: this.context.themecolor}}>blue</button>
        </ul >
      </div >
    )
  }
}

export default ShoppingList;


