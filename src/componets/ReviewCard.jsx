import React from 'react'
import{star} from'../assets/icons';

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div>
        <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'/>
    <p>{feedback}</p>
    <div>
        <img
        src={star}
        wodth={24}
        height={24}
        alt='rating star'
        className='object-contain m-0'/>

        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
    </div>
    <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    
    
    
    </div>
  )
}

export default ReviewCard