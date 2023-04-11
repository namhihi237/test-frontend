import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex justify-between px-5 py-8 bg-[#262626]'>
        <p className={`text-[24px] pr-20 font-sans font-bold text-white`}>Choose the form of payment</p>
        <div>
          <button>
            <Image src="/images/cancel.png" alt='cancel' width={18} height={18} className='text-black pt-3' />
          </button>
        </div>
      </div>
      <div className='px-5 py-5'>
        {/* card */}
        <div className='flex px-4 py-4 justify-between bg-[#F7FAFC] items-center rounded-[20px] border border-[#D3DEE9]'>
          <div className='flex'>
            <div className='bg-[#EDF2F7] w-14 h-14 rounded-full flex justify-center items-center font-semibold text-[24px]'>J</div>
            <div className='ml-3'>
              <p className='font-semibold text-[22px]'>John</p>
              <p className='text-[#718096] text-[14px]'>(88) 99602-2404</p>
            </div>
          </div>
          <div>
            <button className='bg-[#EDF2F7] px-4 py-4 rounded-[8px] font-semibold text-[16px]'>Log out</button>
          </div>
        </div>

        {/* selected service */}
        <div className='mt-6'>
          <p className='font-bold text-[22px] mb-4'>Selected service</p>
          <div className='flex border border-[#D3DEE9] px-4 rounded-[20px]'>
            <div className='justify-center items-center flex'>
              <Image src="/images/avt.png" alt='cancel' width={55} height={55} className='text-black rounded-md mr-3' />
            </div>
            <div className='px-4 py-4 '>
              <p className='font-semibold text-[16px] mb-1'>Japanese lessons</p>
              <div className='flex text-[#718096] mb-1' >
                <Image src="/images/calendar.svg" alt='cancel' width={12} height={12} className='text-black rounded-md' />
                <p className='text-[10px] ml-2'>Nov 7, 2020 · 11:30</p>
              </div>
              <div className='flex text-[#718096]'>
                <Image src="/images/place.svg" alt='cancel' width={12} height={12} className='text-black rounded-md' />
                <p className='text-[10px]  ml-2'>Client`s place</p>
              </div>
              <p className='text-[16px] font-semibold'>Rp 350.000</p>
            </div>
          </div>
        </div>

        {/* location */}
        <p className='font-semibold mt-6 mb-2'>Enter your location</p>
        <input type='text' className='w-full border rounded-[10px] h-12 px-3 placeholder-[#D3DEE9]' placeholder='Enter address' />

        <p className='font-semibold mt-6 mb-2'>Note (optional)</p>
        <input type='text' className='w-full border rounded-[10px] h-12 px-3 placeholder-[#D3DEE9]' placeholder='Enter text here' />

        {/* Choose pay */}
        <p className='text-[24px] font-bold mt-6 mb-6'>Choose a way to pay</p>
        <div class="w-full flex justify-between">
          <button class="flex-none w-[50%] border border-[#262626] mr-2 rounded-[10px] py-3 flex justify-center">
            <p className='font-semibold'>Cash</p>
          </button>
          <button class="flex-grow-0 w-[50%] ml-2 py-3 flex justify-center rounded-[10px] bg-[#EDF2F7]">
            <p className='font-semibold'>Credit card</p>
          </button>
        </div>
        <div class="mt-4">
          <button class="flex-grow w-[50%] ml-2 py-1 rounded-[10px] bg-[#EDF2F7]">
            <p className='font-semibold flex items-center justify-center'>eWallet/</p>
            <p className='font-semibold flex items-center justify-center'>Virtual bank</p>
          </button>
        </div>

        {/* agree */}
        <div className='flex pr-5 mt-5'>
          <div className='mr-3'>
            <input type="checkbox" className='text-[#616161]' />
          </div>
          <p className='text-[14px] text-[#718096]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed {' '}
            <a href='\' className='text-[#1E21FF] underline'>
              do eiusmod
            </a>
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className='flex justify-between items-center border-t-2 py-4 px-6'>
        <a className='font-medium' href='\'>Previous</a>
        <button className='px-10 text-white bg-[#1E21FF] py-3 rounded-[10px] font-semibold'>Next</button>
      </div>
    </div>
  )
}
