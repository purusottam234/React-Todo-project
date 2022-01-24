import React,{Component} from 'react';
import './App.css';
import { TodoBanner } from './TodoBanner';
import { TodoRow } from './TodoRow';
import {TodoCreator} from './TodoCreater';
 

export default class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      userName : "Purusottam",
      todoItems:[{action: 'Buy a flowers',done: false},{action: 'do workout',done: true},{action:'study novels', done: true}],
      //newItemText:" "
    }
  }
 
  updateNewTextValue = (event) =>
  {
    this.setState({ newItemText:event.target.value });
  }
  createNewTodo =(task) =>
  {
    if(!this.state.todoItems.find(item=>item.action === task))
    {
      this.setState({todoItems:[...this.state.todoItems,
                   {action:task, done : false}],
                   newItemText: ""
                  });
    }

  }
  changeStateDate =()=>
  {
    this.setState(
      {userName: this.state.userName === 'Purusottam'  ?  'lucky':'Purusottam'}
    )
  }

  toggleTodo = (todo) => this.setState
  ({ todoItems:this.state.todoItems.map(item => item.action === todo.action ? {...item,done: !item.done}: item)});

  todoTableRows =() => this.state.todoItems.map( item => 
                     <tr key={item.action}>
                       <td>{item.action}</td>
                       <td>
                         <input type="checkbox" checked={item.done} onChange ={() => this.toggleTodo(item)}></input>
                       </td>
                     </tr>
    
    );

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
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Todo Task Name</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {this.todoTableRows()}
        </tbody>
      </table>
    </div>
  </div>

}