import { useLoaderData, useParams } from "react-router-dom";
import Money from '../../../public/money.png'
import Calendar from '../../../public/calendar.png'
import Phone from '../../../public/phone.png'
import Email from '../../../public/email.png'
import Location from '../../../public/location2.png'

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    return (
        <div>
            <div className="h-[200px] w-6xl  bg-[#7e8ffe34]">
                <h1 className="text-center font-Lobster text-7xl pt-16 font-extrabold "><p >Job Details</p></h1>
            </div>
            <br /> <br />
            <div className="grid gap-4 grid-cols-4 w-6xl mb-8 ml-3">
                <div className=" col-span-3">
                    <div>
                        <h1 className="p-3"><span className="font-extrabold">Job Description</span>: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h1>
                    </div>
                    <div className="p-3">
                        <h1><span className="font-extrabold">Job Responsibility</span>: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h1>
                    </div>
                    <div className="p-3">
                        <h1 className="text-[16px] font-extrabold">Educational Requirements:</h1>
                        <h1>Bachelor degree to complete any reputational university.</h1>
                    </div>
                    <div className="p-3">
                        <h1 className="font-extrabold ">Experiences:</h1>
                        <h1 className="">2-3 Years in this field.</h1>
                    </div>
                </div>
                <div className="border mr-2 bg-[#7e8ffe2c] rounded-[10px]">
                    <div>
                        <h1 className="text-center mt-2 font-Manrope font-extrabold">Job Details</h1>
                    </div>
                    <div className="w-[250px] ml-5 mt-2 h-[2px] bg-[#7E90FE] ">
                        <hr />
                    </div>
                    <div className=" p-4">
                        < div className="flex gap-4">
                            <img className="w-[24px] h-[24px]" src={Money} /> <h1 className="font-Manrope"><span className="font-extrabold">Salary</span> : 100K - 150K (Per Month)</h1>
                        </div>
                        <div className="flex gap-4 mt-3">
                            <img src={Calendar} />
                            <h1 className="font-Manrope"><span className="font-extrabold">Job Title</span>: Product Designer</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-center text-[20px] font-Manrope font-extrabold">Contact Information</h1>
                    </div>
                    <div className="w-[250px] ml-5 mt-2 h-[2px] bg-[#7E90FE]">
                        <hr />
                    </div>
                    <div className="p-4 ">
                        <div className="flex gap-2">
                            <img src={Phone} />
                            <h1 className=""><span className="text-black font-extrabold font-Manrope ">Phone</span> : 01750-00 00 00</h1>
                        </div>
                        <div className=" flex gap-2 mt-4">
                            <img src={Email} />
                            <h1 className=""><span className="text-black font-extrabold font-Manrope ">Email </span>: info@gmail.com</h1>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <img className="w-[24px] h-[24px]" src={Location} />
                            <h1 className=""><span className="text-black font-extrabold font-Manrope ">Address  </span>: Dhanmondi 32, Sukrabad
                                Dhaka, Bangladesh</h1>
                        </div>
                    </div>
                    <button className="btn btn-primary ml-24 mb-5">Apply Now</button>
                </div>
                
            </div>
            

        </div>
    );
};

export default JobDetails;