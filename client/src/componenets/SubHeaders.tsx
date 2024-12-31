
import { Link } from "react-router-dom"
import subHeader from "../data/subHeaders.json"

const SubHeaders = () => {
  return (
    <div className="text-center">
    {
        subHeader.map(sub => (
            <Link to={sub.name} key={sub.name} className=" flex justify-center p-4 font-semibold text-md cursor-pointer hover:bg-gray-200 hover:animate-pulse">
              {sub.name}
            </Link>
        ))
    }
    </div>
  )
}

export default SubHeaders