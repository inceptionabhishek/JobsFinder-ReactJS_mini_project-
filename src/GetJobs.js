import React, {useState } from 'react';
import DisplayJobs from './Components/DisplayJobs';

function GetJobs() {
    const api = {
      base: "https://remotive.io/api/remote-jobs?category=",
    };
     
    const [jobslist,SetJobsList] =useState({});
    const [isLoading, setIsLoading] = useState(true);
    const handleClick =(e) =>{
      setIsLoading(false)
        const selctedCateogry = e.target.value;
        fetch(api.base+selctedCateogry)
          .then((res) => res.json())
          .then((result) => {
            SetJobsList(result);
            console.log(result);
            //  for (let [key, value] of Object.entries(jobslist)) {
            //    if (key === "jobs") {
            //     value.map((values) => (
            //        console.log(values.id)
            //     ))
            //    }
            //  }
          });
    }
    
function renderJobs(){
  const ids=[];
   for (let [key, value] of Object.entries(jobslist)) {
     if (key === "jobs") {
       value.map((values) => (ids.push(values)));
     }
   }
   return ids
}
      
    return (
      <div>
        <div className="SelectOptions">
          <select
            className="SelectJobList"
            value={jobslist}
            onChange={handleClick}
          >
            <option value="select">select</option>
            <option value="software-dev">software-dev</option>
            <option value="customer-support">customer-support</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="product">Product</option>
            <option value="business">Business</option>
            <option value="data">Data</option>
            <option value="devops">DevOps / Sysadmin</option>
            <option value="finance-legal">Finance / Legal</option>
            <option value="hr">Human Resources</option>
            <option value="qa">QA</option>
            <option value="writing">Writing</option>
            <option value="teaching">Teaching</option>
            <option value="medical-health">Medical / Health</option>
            <option value="all-others">All others</option>
          </select>
        </div>
        <div className="DisplayJobsGrid">
          {renderJobs().map((values) => (
            <DisplayJobs
              isLoading={isLoading}
              title={values.title}
              url={values.url}
              companyName={values.company_name}
              Location={values.candidate_required_location}
              publication={values.publication_date}
              job_type={values.job_type}
              description={values.description}
            />
          ))}
        </div>
      </div>
    );
}

export default GetJobs
