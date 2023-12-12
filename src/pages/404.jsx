import { Link } from "react-router-dom";

const NotFount = () => {
    return (
        <div className=' w-full h-full flex justify-center items-center flex-col'>
            <div className=' font-extrabold text-4xl'>Oops!</div>
            <div className=' text-xl my-5'>Sorry, maybe you can look elsewhere</div>
            <Link to={"/"} className='text-xl'>Go Back</Link>
        </div>
    )
}

export default NotFount;