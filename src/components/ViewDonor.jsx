import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewDonor = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios
            .get("https://host-demo-app.onrender.com/api/donors")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <NavBar />

            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 className="text-center mb-4">
                            View All Donors
                        </h2>

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-danger">
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Blood Group</th>
                                        <th>Phone</th>
                                        <th>City</th>
                                        <th>Weight (kg)</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        data.map((value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.donor_name}</td>
                                                    <td>{value.age}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.blood_group}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.city}</td>
                                                    <td>{value.weight_kg}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewDonor