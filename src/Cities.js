import React from 'react';
import "./css/App.css";

function Cities(props) {
    return (
        <div>
            <div className="row images" style={{textAlign: 'center'}}>
                <div className="col-md-3" onClick={()=>props.val("amsterdam")}>
                    <img className="img-fluid" alt="amsterdam" src="https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" />
                    <b>Amsterdam</b>
                </div>
                <div className="col-md-3" onClick={()=>props.val("london")}>
                    <img className="img-fluid" alt="london" src="https://lp-cms-production.imgix.net/2019-06/55425108.jpg" />
                    <b>London</b>
                </div>
                <div className="col-md-3" onClick={()=>props.val("paris")}>
                    <img className="img-fluid" alt="paris" src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg" />
                    <b>Paris</b>
                </div>
                <div className="col-md-3" onClick={()=>props.val("chicago")}>
                    <img className="img-fluid" alt="chicago" src="https://cms.finnair.com/resource/blob/1336982/ffe0312861b34e7f9736ad72fd6c9f95/chicago-main-data.jpg?impolicy=crop&width=2666&height=2666&x=667&y=0&imwidth=768" />
                    <b>Chicago</b>
                </div>
            </div>
        </div>
    );
}

export default Cities;