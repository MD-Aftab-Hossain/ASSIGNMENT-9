import { use } from "react"
import { Contextapi } from "../context/Authcontext"

const Forget = () => {
    const { forgetemail } = use(Contextapi)
    console.log('forgetemail', forgetemail)
    return (
        <div className="my-10">
            <form className="flex flex-col w-80 mx-auto justify-center items-center" onSubmit={(e)=>{
                e.preventDefault()
                window.location.href = "https://mail.google.com/mail/u/0/"
            }} action="">
                <label className="label text-black font-bold">Your Email</label>
                <input required defaultValue={forgetemail} type="email" name='email' className="mb-4 input placeholder-gray-400" placeholder="Email" />
                <button className="btn bg-amber-300 w-35">Reset Password</button>
            </form>
        </div>
    ) 
}

export default Forget

