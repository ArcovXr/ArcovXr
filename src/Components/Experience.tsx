import type { ReactNode } from "react";

interface Props {
    place:ReactNode;
    occ:ReactNode;
    date:ReactNode;
    s_skills:ReactNode;

}
function Experience ({place,occ,date,s_skills}:Props){
    return(

        <div className="">

  
        <div className="relative border-l-4 border-white ml-5 ">

          <div className=" ml-6 relative">
            <div className=" absolute -left-11.5 -top-2 w-10 h-10 bg-black border-6 border-cyan-300 rounded-full z-10"></div>
            <h3 className="text-2xl font-bold">
            {place}
            </h3>
            <p className="font-semibold mt-5 ">{occ}</p>
            <p className="text-sm text-gray-400 mb-3 font-thin">{date}</p>
            <ul className="text-sm text-gray-400 list-disc ml-5 space-y-1">
            {s_skills}
            </ul>
          </div>
        </div>
      </div>

    );  
};
export default Experience;