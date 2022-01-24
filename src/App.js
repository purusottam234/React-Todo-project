import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
 

export default class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      userName : "Purusottam",
      todoItems:[{action: 'Buy a flowers',done: false},{action: 'do workout',done: true},{action:'study novels', done: true}],
      newItemText:" "
    }
  }
 
  updateNewTextValue = (event) =>
  {
    this.setState({ newItemText:event.target.value });
  }
  createNewTodo =() =>
  {
    if(!this.state.todoItems.find(item=>item.action === this.state.newItemText))
    {
      this.setState({todoItems:[...this.state.todoItems,
                   {action:this.state.newItemText, done : false}],
                   newItemText: ""
                  });
    }

  }
  render = ()=>
  <div>
    <h4 className='bg-primary text-white text-center p-2'>{this.state.userName}'s Todo List
    ({this.state.todoItems.filter(t=>!t.done).length}) items
    </h4>
    <div className='container-fluid'>
      <div className='m-1'>
        <input className='form-control' value={this.state.newItemText} onChange={this.updateNewTextValue}/>
        <button className='btn btn-danger mt-1' onClick={this.createNewTodo}>Add a new task</button>
      </div>
    </div>
  </div>

}