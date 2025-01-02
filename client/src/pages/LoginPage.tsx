import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
    <div className="w-[30%]">
      <div className="flex flex-col rounded-lg border-2 gap-4 p-4 ">
        <h4 className="text-xl font-semibold">Sign In</h4>
        {/* <div className="flex flex-col">
          <label htmlFor="username">Username <span className="text-red-600">*</span></label>
          <input type="text" name="" id="username" placeholder="Enter username" className="border-2 outline-none p-1 rounded-md mt-1"/>
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input type="email" name="" id="email" placeholder="Enter email" className="border-2 outline-blue-300 p-1 rounded-md mt-1"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password <span className="text-red-600">*</span></label>
          <input type="password" name="" id="password" placeholder="Enter password" className="border-2 outline-blue-300 p-1 rounded-md mt-1"/>       
        </div>
        
        <button className="bg-blue-400 rounded-lg p-2 text-blue-700">Login</button>
      </div>
      <p className="text-sm text-right text-gray-600 mb-0">Not a user? <Link to="/register" className="text-blue-500">sign up</Link></p>
    </div>
  </main>
  )
}

export default LoginPage