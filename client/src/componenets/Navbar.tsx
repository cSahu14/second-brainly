import { CiShare2 } from "react-icons/ci"
import { IoAddOutline } from "react-icons/io5"

const Navbar = () => {
  return (
    <nav className="p-8 flex justify-between items-center">
       <div className="flex">
            All Notes
       </div>
       <div className="flex gap-3">
            <button className="bg-blue-200 rounded-md px-3 py-2 text-blue-700 flex items-center gap-1">
                <CiShare2 />
                <span className="text-sm">Share Brain</span>
            </button>
            <button className="bg-blue-600 rounded-md px-3 py-2 text-white flex items-center gap-1">
                <IoAddOutline />
                <span className="text-sm">Add Content</span>
            </button>
       </div>
    </nav>
  )
}

export default Navbar