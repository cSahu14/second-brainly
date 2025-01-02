import { CiShare2 } from "react-icons/ci"
import { MdDeleteOutline } from "react-icons/md"
import { SiGoogledocs } from "react-icons/si"

const CardComponent = () => {
  return (
    <div className="flex flex-col border-2 rounded-xl w-48 p-4">
        <div className="flex justify-between items-center">
            <div className="w-[70%] gap-1 flex items-center">
                <span><SiGoogledocs /></span>
                <span>Documents</span>
            </div>
            <div className="w-[25%] flex items-center justify-between">
                <span className="cursor-pointer"><CiShare2 /></span>
                <span className="cursor-pointer"><MdDeleteOutline />
                </span>
            </div>
        </div>
        <div className="mt-2">
            <h4 className="font-semibold">Future Products</h4>
            <li className="text-xs text-gray-500">Build a personal knowledge base</li>
            <li className="text-xs text-gray-500">Create a habit tracker</li>
            <li className="text-xs text-gray-500">Design a minimalist todo app</li>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-blue-200 rounded-full p-1 text-[10px] text-blue-700">#productivity</span>
            <span className="bg-blue-200 rounded-full p-1 text-[10px] text-blue-700">#productivity</span>
            <span className="bg-blue-200 rounded-full p-1 text-[10px] text-blue-700">#ideas</span>
        </div>
        <div></div>
    </div>
  )
}

export default CardComponent