import React from 'react'

const Button = ({styles}) => {
  return (
   <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink_gradient duration-300` }>
    hello@sadcat.capital
   </button>
  )
}

export default Button