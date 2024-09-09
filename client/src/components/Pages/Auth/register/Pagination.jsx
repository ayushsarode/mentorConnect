/* eslint-disable react/prop-types */
import React from 'react'

function Pagination({ currentStep, prevStep, nextStep, handleSubmit }) {
  return (
    <div className="card-actions justify-between">
    {currentStep > 1 && (
      <button className="btn btn-outline" onClick={prevStep}>
        Previous
      </button>
    )}
    {currentStep === 1 && (
      <button className="btn btn-primary" onClick={nextStep}>
        Next
      </button>
    )}
    {currentStep === 2 && (
      <button className="btn btn-primary" onClick={handleSubmit}>
        Register
      </button>
    )}
  </div>
  )
}

export default Pagination