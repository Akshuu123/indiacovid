import React from "react";
const Heading = () => {
    let res = fetch('https://api.rootnet.in/covid19-in/stats/latest')
    res.then((response) => response.json())
        .then((result) => {
            var data = result.data.summary
            console.log(data);
            let htag=document.querySelectorAll('span')
            htag[0].innerHTML=data.total;
            htag[1].innerHTML=data.deaths;
            htag[2].innerText=data.discharged;
        }).catch((err) => {
            console.log(err)
        });

    return (
        <>
            <div className="main-heading">
                <h1 className='text-center pt-3 fw-bold'>COVID-19 TRACKER</h1>
            </div>

            <div className="summary text-center d-flex justify-content-between container">
                <h3 className="col-3 d-flex flex-column rounded px-2 py-2 text-bg-info">Total Case<span></span></h3>
                <h3 className="col-3 d-flex flex-column rounded px-2 py-2 text-bg-danger">Total Death<span></span></h3>
                <h3 className="col-3 d-flex flex-column rounded px-2 py-2 text-bg-success">Total Discharged<span></span></h3>
            </div>
        </>
    )
}
export default Heading;

const newApp = () => {
    return (
        <>

        </>
    )
}