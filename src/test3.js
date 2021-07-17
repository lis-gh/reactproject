import React from 'react';

function Cards(){
    const emp = {
        "name" : "lolo",
        "mail1" : "lolo@gmail.com",
        "mail2" : "lele@gmail.com"

    }
    if(emp.mail2 === "lele@gmail.com"){
     console.log('hiii');
    }

    return(
        <div className="container mt-3">
            <h1>{`my name ${emp.name}`}</h1>
            <div className="card-group">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{emp.name}</h5>
                    <p className="card-text"><small className="text-muted">{emp.mail1}</small></p>
                    </div>
                </div>
                <div className="card" style={{color: emp.mail2==='lele@gmail.com' ? 'black': 'white'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{emp.name}</h5>
                    <p id="bl" className="card-text"><small className="text-muted">{ emp.mail2}</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{emp.name}</h5>
                    <p className="card-text"><small className="text-muted">{emp.mail1}</small></p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cards;