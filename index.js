import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			sttTitle:0,
			txtTitle:'What is Lorem Ipsum?'
			sttPara:0,
			txtPara:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
		}
	}

	//============
	
	setTitle = (e)=>{
		if(this.state.sttTitle === 0){
			this.setState({
				sttTitle:1
			})
		}
		else{
			this.setState({
				sttTitle:0,
				txtTitle:e.target.value
			})
		}
	}
	showTitle = ()=>{
		if(this.state.sttTitle === 0){
			return this.title()
		}
		else{
			return this.frmTitle()
		}
	}
	title = ()=>{
		return (
			<h4 onDoubleClick={this.setTitle}>{this.state.txtTitle}</h4>
		)
	}
	frmTitle = ()=>{
		return (
			<input onBlur={this.setTitle} id="title" type="text"/>
		)
	}
	
//====================

setPara = (e)=>{
	if(this.state.sttPara === 0){
		this.setState({
			sttTitle:1
		})
	}
	else{
		this.setState({
			sttTitle:0,
			txtTitle:e.target.value
		})
	}
}
showTitle = ()=>{
	if(this.state.sttTitle === 0){
		return this.title()
	}
	else{
		return this.frmTitle()
	}
}
title = ()=>{
	return (
		<h4 onDoubleClick={this.setTitle}>{this.state.txtTitle}</h4>
	)
}
frmTitle = ()=>{
	return (
		<input onBlur={this.setTitle} id="title" type="text"/>
	)
}

//===========================

	componentDidUpdate(){
		if(this.state.sttTitle === 1){
			document.getElementById('title').value = this.state.txtTitle
		}
	}
	
	render(){
		return (
			<div id="main">
				<div class="content-item">
					<img src="car.jpg"/>
					{this.showTitle()}
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Main/>, document.getElementById('root'));

















/*
Mounting

    constructor()
    getDerivedStateFromProps()
    render()
    componentDidMount()

Updating

    getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

Unmounting

	componentWillUnmount()



*/