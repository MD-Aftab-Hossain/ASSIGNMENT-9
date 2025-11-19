import { use } from 'react'
import { NavLink } from 'react-router'
import { Contextapi } from '../context/Authcontext'


//daisy
const Navbar = () => {
    const { signoutman, user } = use(Contextapi)
    console.log('photo', user?.photoURL)
    const handlesignout = (e) => {
        e.preventDefault()
        signoutman()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-base-100 shadow-sm mb-0 pb-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">SkillSwap</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    {
                        user ? <>
                            <li><NavLink className='bg-red-600 btn text-white' onClick={handlesignout}>Log out</NavLink></li>


                            <li title={user?.displayName}>
                                <NavLink to={'/profile'}>
                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            className="w-7 h-7 rounded-full"
                                            alt="profile"
                                        />
                                    ) : (
                                        window.location.reload()
                                    )}
                                </NavLink>
                            </li>


                        </>
                            : <li><NavLink className='bg-green-600 btn text-white' to={'/login'}>Login/Sign up</NavLink></li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar