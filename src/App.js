import React,{Component} from 'react';
import './App.css';
import { TodoBanner } from './TodoBanner';
import { TodoRow } from './TodoRow';
import {TodoCreater} from './TodoCreater';
import {VisibilityControl} from './VisibilityControl';
 

export default class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      userName : "Purusottam",
      todoItems:[{action: 'Buy a flowers',done: false},{action: 'do workout',done: true},{action:'study novels', done: true}],
      showCompleted : true
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
                   {action:task, done : false}]},
      () => localStorage.setItem("todos",JSON.stringify(this.state)));
                   //newItemText: ""
                 
    }

  }
  // changeStateDate =()=>
  // {
  //   this.setState(
  //     {userName: this.state.userName === 'Purusottam'  ?  'lucky':'Purusottam'}
  //   )
  // }

  toggleTodo = (todo) => this.setState
  ({ todoItems:this.state.todoItems.map(item => item.action === todo.action ? {...item,done: !item.done}: item)});

  todoTableRows =(doneValue) => this.state.todoItems.filter(item =>item.done === doneValue)
  .map( item => 
                    //  <tr key={item.action}>
                    //    <td>{item.action}</td>
                    //    <td>
                    //      <input type="checkbox" checked={item.done} onChange ={() => this.toggleTodo(item)}></input>
                    //    </td>
                    //  </tr>
                    <TodoRow key={item.action} item ={item} callback={this.toggleTodo} />
    );





    //to load /get the kept data
    componentDidMount =()=>
    {
      let data = localStorage.getItem("todos");
      this.setState(data!=null ? JSON.parse(data):
      {
        userName : "Purusottam",
      todoItems:[{action: 'Buy a flowers',done: false},{action: 'do workout',done: true},{action:'study novels', done: true}],
      showCompleted : true
      });
    }

  render = ()=>
  <div>
    
    
    {/* <h4 className='bg-primary text-white text-center p-2'>{this.state.userName}'s Todo List({this.state.todoItems.filter(t=>!t.done).length}) items </h4>  */}
    
    

    <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
    <div className='container-fluid'>
      {/* <div className='m-1'>
        <input className='form-control' value={this.state.newItemText} onChange={this.updateNewTextValue}/>
        <button className='btn btn-danger mt-1' onClick={this.createNewTodo}>Add a new task</button>
      </div> */}

      <TodoCreater callback={this.createNewTodo}/>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Todo Task Name</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {/** show incomplete tasks */}
          { this.todoTableRows(false) }
        </tbody>
        </table>
        <div className='bg-secondary text-white text-center p-2' >
          {/** calling child component */}
          <VisibilityControl description='completed tasks' isChecked={this.state.showCompleted}
          callback={(checked)=>this.setState({showCompleted: checked})}/>
        </div>
        {this.state.showCompleted &&
        <table className='table table-striped table-bordered' >
          <thead>
            <tr>
              <td>Task Name</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {/* show completed tasks */}
            {this.todoTableRows(true)}

          </tbody>
        </table>
        }

    </div>
  </div>

}