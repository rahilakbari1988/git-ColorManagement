import React, {useState} from 'react';
import './RatingStar.css';

const RatingStar = () => {
    const [rating, setRating] = useState(null)
  return( 
        <div>
            {[...Array(5)].map((star, i)=>{
                const ratingValue = i +1;

                return(
                <div class="ratingStart">
                    <label>
                        <input  type='radio'
                                name='rating'
                                value={ratingValue}
                                onClick={()=>setRating(ratingValue)}
                        />
                        <span  style={{color:ratingValue <= rating ? "#ffc107" : " #e4e5e9"}} >☆</span>
                    </label>
                </div>
                )

            })}
        </div>
    )
}

export default RatingStar;