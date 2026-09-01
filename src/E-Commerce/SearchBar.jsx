import React from 'react'
import { useCart } from './Content/context'

const SearchBar = () => {

    const { search, setSearch, filterSearch } = useCart()


    return (
        <div className='d-flex justify-content-center flex-column py-4'>
            <input type="text" name="search" placeholder='Products Search...' onChange={(e) => setSearch(e.target.value)} value={search} />

            <div>
                {
                    search && (
                        <ul>
                            {
                                filterSearch.length > 0 ? (
                                    filterSearch.map((item) => {
                                        return <li key={item.id} className='py-2 gap-2 row '>
                                            <img src={item.image} alt={item.name} className='pe-2 col-6' style={{ width: '100px', height: '50' }} />
                                            <span className='text-light me-2 col-3'>{item.name}</span>
                                            <span className='text-light me-2 col-3'>Rs.{item.price}</span>
                                        </li>
                                    })
                                ) : (
                                    <p>No Products Found</p>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div >
    )
}

export default SearchBar

