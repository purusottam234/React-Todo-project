import react,{Component} from "react";
export class VisibilityControl extends Component
{
    render = () =>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" checked={this.props.ischecked} onChange={(e) => this.props.callback(e.target.checked)} />
        <label className="form-checked-label">Show  {this.props.description}</label>
{/** used props.to received data from parent component */}
    </div>
 }