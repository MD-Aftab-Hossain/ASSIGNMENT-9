import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router'

const Details = () => {
    const targetobj = useParams()
    const [singleData, setSingleData] = useState(null)

    const handletoast=(e)=>{
        e.preventDefault()
        e.target.reset()
        toast('Booking completed successfully')
    }
    useEffect(() => {
        fetch('/teachers.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(single => single.skillId == targetobj.cardid)
                setSingleData(found)
                console.log(found)
            })
    }, [targetobj])

    console.log('sdata', singleData)
    return (
        <div className="w-full bg-white overflow-hidden">
            <img src={singleData?.image} alt={singleData?.skillName} className="w-full h-64 object-cover" />
            <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold text-gray-800">{singleData?.skillName}</h2>
                    <span className="text-yellow-500 text-xl font-semibold">⭐ {singleData?.rating}</span>
                </div>
                <hr className="mb-4" />
                <h3 className="text-lg font-semibold mb-1">Description</h3>
                <p className="text-gray-700 mb-4">{singleData?.description}</p>
                <hr className="mb-4" />
                <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-3 mb-5">
                    <div className="bg-indigo-100 p-3 rounded-lg text-center">
                        <h4 className="text-gray-600 font-medium">Category</h4>
                        <p className="font-semibold text-indigo-800">{singleData?.category}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg text-center">
                        <h4 className="text-gray-600 font-medium">Price</h4>
                        <p className="font-semibold text-green-700">${singleData?.price} / Hour</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded-lg text-center">
                        <h4 className="text-gray-600 font-medium">Slots</h4>
                        <p className="font-semibold text-red-700">{singleData?.slotsAvailable}</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                        <h4 className="text-gray-600 font-medium">Provider</h4>
                        <p className="font-semibold text-gray-800">{singleData?.providerName}</p>
                    </div>
                </div>
                <hr className="mb-4" />

                {/* form */}

                <div className="p-4 flex justify-center w-full">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-6 h-fit">
                        <h2 className="text-xl font-bold mb-4 border-b pb-2">Book Now</h2>

                        <form onSubmit={handletoast} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" required className="mt-1 block w-full p-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" required className="mt-1 block w-full p-2 border rounded-md" />
                            </div>
                            <button type="submit" className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200">Submit</button>
                            <Toaster></Toaster>
                        </form>
                    </div>
                </div>


                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-700 mb-1">Contact Email:</p>
                    <a className="text-blue-600 hover:underline">{singleData?.providerEmail}</a>
                </div>
            </div>



        </div>



    )
}

export default Details