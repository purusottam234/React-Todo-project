//responsibility of check box
//callback is used when the user click to change the task
//props define the data prop means item it defines the function callback

import react, {Component} from "react";

export class TodoRow extends Component
{
    render = () =>
    <tr>
        <td>{this.props.item.action}</td>
        <td>
            <input type="checkbox" checked = {this.props.item.done}
            onChange={()=>this.props.callback(this.props.item)} />
        </td>
    </tr>
}