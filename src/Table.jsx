import React, { useEffect, useState } from "react";
const Table = () => {
    const [data, updata] = useState([])
    const getCoviddata = async () => {
        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
        const actualData = await res.json();
        
        const regional = actualData.data.regional
        
        updata(regional)

    }
    useEffect(() => {
        getCoviddata();
    }, []);
    return (
        <>
            <div className="table-responsive container-fluid pt-3">
                <table className='table table-responsive table-hover text-center text-uppercase'>
                    <thead className='thead-dark'>
                        <tr className="text-bg-secondary">
                            <th>State</th>
                            <th>Confirmed Case</th>
                            <th>Confirmed Case Foreign</th>
                            <th>Dishcarged</th>
                            <th>Death</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-light tbody">
                        {data.map((cval, index) => {
                            return (
                                <tr key={index}>
                                    <td>{cval.loc}</td>
                                    <td>{cval.confirmedCasesIndian}</td>
                                    <td>{cval.confirmedCasesForeign}</td>
                                    <td>{cval.discharged}</td>
                                    <td>{cval.deaths}</td>
                                    <td>{cval.totalConfirmed}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table;