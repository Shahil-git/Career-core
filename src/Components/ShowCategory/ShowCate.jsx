

const ShowCate = ({doit}) => {
    const {id , logo, category_name,availability} = doit
    return (
        <div className=" border-[2px]  rounded-[5px] w-[190px] h-[150px] bg-[#7e8ffe2b]">
           <img className="w-[40px] h-[40px] ml-[17px] mt-[25px] mb-2 p-1 bg-[#7e8ffe2b]" src={logo} />
           <h2 className="ml-[17px]">{category_name}</h2>
           <h1 className="ml-[17px]">{availability}</h1>
        </div>
    ); 
};

export default ShowCate;