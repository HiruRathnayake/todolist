import React, { Component} from "react";
import { className } from "postcss-selector-parser";

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items:[]
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        if(this._inputElement !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return{
                    item: prevState.item.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";
        console.log(this.state.items);
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}placeholder="enter task"></input>
                        <button type="submit">ADD</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;