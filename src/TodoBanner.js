//child compoment do only one features

import React,{Component} from "react";

export class TodoBanner extends Component{
    render=() => 
    <h4 className="bg-primary text-white text-center p-2">
        {this.props.name}'s todo List
        ({this.props.task.filter(t=>!t.done).length} item to do)
    </h4>
}