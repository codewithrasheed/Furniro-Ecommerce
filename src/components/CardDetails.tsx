import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CartDetails = () => {
  return (
    <div className='bg-white'>
      <div className="font-sans bg-white max-w-6xl mx-auto p-4">

        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Product Table */}
          <div className="flex-1">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden md:block bg-[#F9F1E7]">
              <div className='grid grid-cols-4 text-center'>
                <h3 className="text-base font-medium p-4">Product</h3>
                <h3 className="text-base font-medium p-4">Price</h3>
                <h3 className="text-base font-medium p-4">Quantity</h3>
                <h3 className="text-base font-medium p-4">Subtotal</h3>
              </div>
            </div>

            {/* Mobile Product Card */}
            <div className="md:hidden bg-white rounded-lg shadow-sm mb-4">
              <div className="p-4">
                <div className="flex gap-4 mb-4">
                  <Image 
                    src="/cartsofa.png" 
                    alt='Asgaard sofa' 
                    width={100} 
                    height={100}
                    className="rounded-lg bg-[#F9F1E7]"
                  />
                  <div>
                    <h3 className="font-bold text-[#9F9F9F]">Asgaard sofa</h3>
                    <p className="text-sm text-[#9F9F9F] mt-1">Rs. 250,000.00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="border rounded-lg px-3 py-1">
                    <span>1</span>
                  </div>
                  <p className="font-semibold">Rs. 250,000.00</p>
                  <button>
                    <Image 
                      src="/remove.png" 
                      alt="Remove" 
                      width={24} 
                      height={24} 
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Product Row */}
            <div className="hidden md:block">
              <div className='grid grid-cols-4 items-center text-center py-6 border-b'>
                <div className="flex items-center gap-4 justify-center">
                  <Image 
                    src="/cartsofa.png" 
                    alt='Asgaard sofa' 
                    width={100} 
                    height={100}
                    className="rounded-lg bg-[#F9F1E7]"
                  />
                  <p className="font-bold text-[#9F9F9F]">Asgaard sofa</p>
                </div>
                <div>
                  <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
                </div>
                <div className="flex justify-center">
                  <div className="border rounded-lg px-3 py-1 w-16 text-center">
                    <span>1</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p className="font-semibold">Rs. 250,000.00</p>
                  <button>
                    <Image 
                      src="/remove.png" 
                      alt="Remove" 
                      width={24} 
                      height={24} 
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] p-6 rounded-lg w-full lg:w-[400px] mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold mb-6 text-center">Cart Totals</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-base">Subtotal</span>
                <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base">Total</span>
                <span className="text-[#B88E2F] text-xl font-medium">Rs. 250,000.00</span>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link 
                href="/checkout" 
                className="inline-block border border-black text-center py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDetails

