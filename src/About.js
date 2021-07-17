import React, { Component,Fragment } from 'react'
class About extends Component{
    state={
        courses:['HTML','CSS'],
        visibe:false
    }
    list=()=>
    { 
        
        return(this.state.courses.map((ele,index)=>{
            return(
                <Fragment>
               <li className="list-group-item " >
            <form name="form2" style={{display:"none"}} >
                <input type="text" name="newitem" defaultValue={ele}/>
                <button type="submit"  className="btn btn-outline-warning" onClick={(e)=>{this.edititem(index,e)}}>update</button>
            </form>
           
           
           
           
            <span>   
         {ele} 
             <button className="btn btn-danger m-1 float-right" onClick={()=>{this.deleteitem(index)}}>Delete</button>
             <button className="btn btn-outline-success m-1 float-right" onClick={()=>{this.togglevisible(index)}}>Update</button>
            </span>
             </li>
             </Fragment>
                )
        })

        )

    }
    togglevisible=(index)=>{
     // this.state.visibe=!this.state.visibe;
        //this.setState(this.state.visibe);
       // console.log(this.state.visibe);
      //  this.list();
       const c1=document.getElementById("allcourse").children[index].querySelector("span");
        document.getElementById("allcourse").children[index].querySelector("form").style.display="block";

          //console.log(c2);
           c1.style.display="none";
           
     
    }
   
    additem=(e)=>{
     e.preventDefault();
     let course=document.form1.course.value;
      //console.log(course);
     this.state.courses.push(course);
     this.setState(this.state.courses);
     document.form1.course.value='';

    }
    deleteitem=(index)=>{
        this.state.courses.splice(index,1);
        this.setState(this.state.courses);

    }
    edititem=(index,e)=>{
       e.preventDefault();
       //const newcourses = this.state.courses.slice()
       const c=document.getElementById("allcourse").children[index].querySelector("form").newitem.value;
       this.state.courses[index]=c;
      this.setState(this.state.courses);
     console.log(this.state.courses);
     document.getElementById("allcourse").children[index].querySelector("span").style.display="block";
        document.getElementById("allcourse").children[index].querySelector("form").style.display="none";



    }
    render(){
     
    return(
        <div className="container">
            <form className="form-inline mt-5" name="form1">
                <input type="text" name="course" placeholder="add the course you learned..." className="form-control w-75"/>
                <button type="submit" className="btn btn-success w-25" onClick={this.additem}>Add</button>
            </form>
            <ul className="list-group " id="allcourse">
               {this.list()}
            </ul>
        
        </div>
    )
}
}

export default About;