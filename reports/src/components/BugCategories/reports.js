import React from "react"

function Reports(props){
    return(
        <div>
            <h1>Reports From The Api</h1>
            {props.reports.map((report)=>{
                return(
                    <div key={report.id}>
                        <h2>{report.tps}</h2>
                        <p>{report.comment}</p>
                        <p>{report.screenshot}</p>
                    </div>
                )
            })}
        </div>
    )
}

export {Reports}