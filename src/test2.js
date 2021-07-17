import React, {Component} from 'react'

class Home extends Component{
    mybtn=document.getElementsByClassName('btn-danger');
     mylist = [];
        click= (e) =>{
            e.preventDefault();
           let name=document.form1.name.value;
            
            
            this.mylist.push(name);
            let mytable=document.getElementById("tdd");
            mytable.innerHTML='';
        this.show();
            
        }
        show =() =>{
           let mytable=document.getElementById("tdd");
            return(
            this.mylist.forEach (item => 
              
                    
              //console.log()
            mytable.innerHTML+=`<tr><td>${item} <button class="btn btn-danger" onclick="${this.mylist.slice(this.mylist.indexOf(item))}" value=${this.mylist.indexOf(item)}>Delete</button></td></tr>`
                
            )
                )
        }
        
        
            
        

        

    render(){

        return(
            <div>
                <table className="table table-striped table-border table-dark mt-5 w-50 text-center">
                    <thead>
                    <tr >
                        <th >The Name</th>
                    </tr>
                    </thead>
                    <tbody id="tdd">
                       
                   {this.show()}
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