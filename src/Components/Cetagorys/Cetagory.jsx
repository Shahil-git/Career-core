import { useEffect, useState } from "react";
import ShowCate from "../ShowCategory/ShowCate";


const Cetagory = () => {
    const [category , setCategory] = useState([])

useEffect(() =>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategory(data))
})


    return (
        <div>
           <h1 className="text-center text-5xl font-Manrope mt-8 font-extrabold">Job Category List</h1> 
           <div className="text-center mt-3 font-Manrope">
           Explore thousands of job opportunities with all the information you need. Its your future
           </div>
          <br />
  <div className="flex justify-between  max-w-6xl ml-14">
  {
    category.map(doit => <ShowCate key={doit.id} doit={doit}></ShowCate>)
  }
  </div>
        </div>
    );
};

export default Cetagory;