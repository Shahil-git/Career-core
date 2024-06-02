import { Link } from "react-router-dom";
import locationPng from "../../../public/Location.png";
import salaryPng from "../../../public/money.png"

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, salary } = job
  return (
    <div >
      <div className="w-[520px] h-[350px] ml-6 mr-20 card card-compact z  bg-base-100 border-[2px]">
        <figure><img className="w-[116.686px] p-2 mt-5 h-[60px]" src={logo} /></figure>
        <div className="card-body">
          <h2 className="card-title text-[24px] mt-[32px] font-extrabold font-Manrope">{job_title}</h2>
          <p className='font-Manrope text-[20px] '>{company_name}</p>
          <div className="inline-flex ">
            <div className="">
              <p className='font-Manrope text-[16px] text-[#7E90FE] font-extrabold border-[#7E90FE] border-[1px] w-20 text-center rounded-[4px] p-[5px]
        '>{remote_or_onsite} </p>
            </div>
            <div>
              <p className='font-Manrope text-[16px] ml-5 text-[#7E90FE] font-extrabold border-[#7E90FE] border-[1px] w-30 text-center rounded-[4px] p-[5px]
        '>Full Time </p>
            </div>
          </div>
          <div className="flex ">
            <img src={locationPng} />
            <p className='font-Manrope'> {location}</p>
            <img src={salaryPng} />
            <p className='font-Manrope'>{salary}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary font-Manrope">View Details</button>
            </Link>
          </div>
        </div>
      </div> <br />


    </div>
  );
};




export default Job;