import React, {Component} from 'react'

class Home extends Component{
    click= (e) =>{
        e.preventDefault();
        let name=document.form1.name.value;
        let mytable=document.getElementById("tdd");

        mytable.innerHTML+=(`<tr><td>${name}</td></tr>`);
       }

    render(){

        return(
            <div>
                <table className="table table-striped table-border table-dark mt-5 w-50 text-center">
                    <tr >
                        <th >The Name</th>
                    </tr>
                    <tbody id="tdd">
                        <tr >
                            <td>gdh</td>

                        </tr>
                      
                    </tbody>
                </table>
                <form className="form-inline" name="form1">
                    <input className="form-control" type="text" name="name" placeholder="enter the name to add"/>
                    <button type="submit" className="btn btn-success" onClick={this.click}>Add</button>

                </form>

            </div>
        )
    }
}

export default Home