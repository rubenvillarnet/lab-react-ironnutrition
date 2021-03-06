import React, { Component } from 'react'

export default class AddFoodForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    }
  }


  handleNameState = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  handleNameCalories = (e) => {
    this.setState({
      ...this.state,
      calories: +e.target.value
    })
  }

  handleNameImage = (e) => {
    this.setState({
      ...this.state,
      image: e.target.value
    })
  }

  handleNameQuantity = (e) => {
    this.setState({
      ...this.state,
      quantity: e.target.value
    })
  }

  handlerSubmit = (e) => {
    e.preventDefault()
    this.props.evento(this.state)
    this.setState(
      {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
      }
    )
  }



  render() {
    return (
      <form onSubmit={this.handlerSubmit} style={{ display: this.props.displayed }}>
        <input type="text" name="name" placeholder="Insert food name" onChange={this.handleNameState} value={this.state.name}></input>
        <input type="number" name="calories" placeholder="Insert calories" onChange={this.handleNameCalories} value={this.state.calories}></input>
        <input type="text" name="image" placeholder="Insert image link" onChange={this.handleNameImage} value={this.state.image}></input>
        <input type="number" name="quantity" placeholder="Specify quantity" onChange={this.handleNameQuantity} value={this.state.quantity}></input>
        <button type="submit">Add food</button>
      </form>
    )
  }
}
