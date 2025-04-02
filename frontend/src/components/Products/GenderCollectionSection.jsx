import React from 'react'
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
  return (
    
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            <div className='relative flex-1'>
                <img src="https://cdn.pixabay.com/photo/2018/07/22/21/57/fashion-3555646_640.jpg" alt="women collection"  className='w-full h-[700px] object-cover'/>
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women Collection</h2>
<Link to={"/collections/all?gender=Women"} className="text-gray-900 underline" >
Shop Now 
</Link>
                </div>


            </div>
            {/* men */}
            <div className='relative flex-1'>
                <img src="https://cdn.pixabay.com/photo/2024/05/25/05/34/ai-generated-8786359_640.jpg" alt="women collection"  className='w-full h-[700px] object-cover'/>
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>men Collection</h2>
<Link to={"/collections/all?gender=Women"} className="text-gray-900 underline" >
Shop Now 
</Link>
                </div>


            </div>
        </div>
 
    </section>
  )
}

export default GenderCollectionSection