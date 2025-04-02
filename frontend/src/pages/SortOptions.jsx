import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
    const [searchParams,setSearchParams] = useSearchParams();

    const handleSortChange=()=>{
        const sortBy=e.target.value;
        searchParams.set("sortBy",sortBy)
        setSearchParams(searchParams)
    }
  return (
    <div className='mb-4 flex items-center justify-end'><select onChange={handleSortChange} className='border p-2 rounded-md focus:outline-none' id="sort">
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price : Hogh to Law</option>
        <option value="propularity">Propularity</option>
        </select></div>
  )
}

export default SortOptions