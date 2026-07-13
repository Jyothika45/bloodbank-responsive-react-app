import React from 'react'

const AddDonor = () => {
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Donor Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  required
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Gender</label>
                <select
                  className="form-select"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-select"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  min="50"
                  required
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Last Donation Date</label>
                <input
                  type="date"
                  className="form-control"
                />
              </div>

              <div className="col col-12">
                <button type="submit" className="btn btn-danger">
                  Add Donor
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddDonor