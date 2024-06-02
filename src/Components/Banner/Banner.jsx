import Shahil from '../../../public/1000016441.jpg'

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex h-[400px] justify-between bg-[#7e8ffe2b]">
      <div className='pt-[20px] ml-36'>
        <h1 className='leading-[50px] text-[50px] font-extrabold'>One Step</h1>
        <h1 className='leading-[50px] text-[50px] font-extrabold'>Closer To Your</h1>
        <h1 className='leading-[50px] text-[#7E90FE] text-[50px] font-extrabold'>Dream Job</h1>
        <br />
        <div>
        <p>Explore thousands of job opportunities with all the </p>
        <p>information you need. Its your future. Come find it. Manage all</p> 
        <p>your job application from start to finish.</p>
        </div>
        <button className='btn btn-primary mt-8'>Get Started</button>
      </div>
      
      <div>

        <img className='w-[350px] h-[350px] mt-10 mr-36 border-[4px] border-black rounded-[5px]' src={Shahil} />
      </div>

    </div>
  );
};

export default Banner;