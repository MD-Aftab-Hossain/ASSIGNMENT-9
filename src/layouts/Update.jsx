import { updateProfile } from 'firebase/auth'
import { use } from 'react'
import { Contextapi } from '../context/Authcontext'
import { useNavigate } from 'react-router'

const Update = () => {
    const navigate = useNavigate()
    const { user } = use(Contextapi)
    user||navigate('/')
    console.log('up', user)
    const handleupdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const profile = {
            displayName: name ? name : user.displayName ,
            photoURL: photo ? photo : user.photoURL
        }
        updateProfile(user, profile)
        e.target.reset()
    }
    return (
        <div className="card my-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <fieldset className="fieldset">
                    <form onSubmit={handleupdate} action="">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input placeholder-gray-400" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="url" name='photo' className="input placeholder-gray-400" placeholder="Photo URL" />
                        <div className="flex justify-center">
                            <button className="btn w-auto bg-blue-700 btn-neutral mt-4">Save Update</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default Update