import React from "react";
import img from '../.././../images/logo.jpg';

const Description = () =>{
    return (
        <div className="container">
            <div class="row my-5">
    <div class="col-6"><h5>MARK ACCOUNTING, BOOKKEEPING, PAYROLL & TAX</h5>
<h1 className="fw-bold">We'll tackle the tax,<br></br> bookkeeping & finances <br></br> for your business.</h1>
<p >Business owners need all the benefits of an internal staff CPA, but most can't afford it. We help businesses with our Outsourced Accounting service; combining tax prep, tax planning, bookkeeping, payroll and year-round advisory into one simple service.</p>
<p>We're on a mission to help you lower your taxes, save time, improve team productivity, maintain immaculate financials and stay compliant.</p>
</div>
    <div class="col-6">
    <img src={img} alt="" />
    </div>
  </div>
            



        </div>
    );
};

export default Description;