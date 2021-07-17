import React, {Fragment} from 'react'



function Item(props){
    const arr=props.data;
    const del=props.delname;
    let res= arr.length===0 ? <tr><td>no items to show</td></tr> :  arr.map((ele,index) => {
        
      return(
        

        <tr><td>{ele} <button className="btn btn-danger" onClick={()=>{del(index)}}>Delete</button></td></tr>

      )  
    })
    return(
        <Fragment>
            { res}
           
        </Fragment>
    )
}




export default Item