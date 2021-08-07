import React from 'react'
import Spinner from "./Spinner";
function DisplayJobs(props) {
    return props.isLoading? (
      ""
    ) : (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button className="btnTitle">Title :</button>
            {props.title}
            <br />
            <button className="btncompany">Company :</button>
            {props.companyName}
            <br />
            <button className="btnLocation"> Location :</button>
            {props.Location}
            <br />
            <button className="btnjobs_type"> Jobs Type :</button>
            {props.job_type}
            <br />
          </div>
          <div class="flip-card-back">
            <a href={props.url} target="blank">
              Apply ☃
            </a>
          </div>
        </div>
      </div>
    );
}

export default DisplayJobs
