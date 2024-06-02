import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Features = () => {

    const [jobs, setJobs] = useState([]);
    const [length, setLength] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <h1 className="text-[48px] text-center font-Manrope font-extrabold">Featured Jobs</h1>
            <p className="text-center text-[16px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="mt-5 max-w-6xl ml-14 ">
                <div className="grid grid-cols-2">
                    {
                        jobs.slice(0, length).map(job => <Job key={job.id} job={job} ></Job>)
                    }
                </div>
            </div>
            <div className={length === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setLength(jobs.length)}
                    className="btn btn-primary ml-[580px] mb-5">See all JOBs</button>
            </div>
        </div>
    );
};

export default Features;