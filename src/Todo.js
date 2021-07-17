import React, {Component} from 'react'
import Item from './Item'

class Todo extends Component{
    
   state={
       name:['lolo']
   }
  
    show= e=>{
        e.preventDefault();
        let nitem=document.form1.name1.value;
        //console.log(name);
        this.state.name.push(nitem)
       this.setState(this.state.name);
       //console.log(this.state.name);
       document.form1.name1.value='';
    }

    delname= e=>{
        //console.log(this.state.name.indexOf(e));
      this.state.name.splice(e,1);
       this.setState(this.state.name);

    }
    write= ()=>{
       return(
           <h1 >This is simlpe todo list system</h1>
       )
    }
   

    render(){

        return(
            <div>
                 {this.write()}
                <table className="table mt-5 text-center table-striped table-dark">
                    <thead>
                        <tr>
                            <th>The Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Item data={this.state.name} delname={this.delname} />

                    </tbody>
                </table>
                <form className="form-inline" name="form1">
                    <input type="text" className="form-control" name="name1" placeholder="enter the name to add" />
                    <button type="submit" className="btn btn-success form-control" onClick={this.show}>Add</button>
                </form>
            </div>
        )
    }
}

export default Todo