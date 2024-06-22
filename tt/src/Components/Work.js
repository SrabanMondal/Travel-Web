import React from 'react'

const Work = () => {
  return (
    <div className='h-fit w-full bg-[#EA19EF51] flex flex-col sm:flex-row'>
        <div className='h-72 w-full sm:w-7/12 flex flex-col justify-center items-center ml-5 sm:ml-0'>
            <img src='https://s3-alpha-sig.figma.com/img/3102/27c8/55d86b61ad5e1bc42e1a7ab9da7eaf26?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K57JHEK948oBWsL5iuOXUmptOUI7vstqHWAURKNU4zoFyuhf69ciRXJDBYtzrzjF23kbtKfmdeBqBPdeEpOJ94WFKblF-Bhmgb4pgx39Ao6ULVuQs11oQh~VqcV00r92A4ZAxCwwVAQ2x7M7U0xMQz~bZxqgOuuuELHHd4Rq0FRz0gjc~xfrLDHmTpuXYYafafta8NYzZtde~OzanDNpoK0aviArpJ3VU0~kYUDOZiG3bo6m8Gp7zCJVSMpqp~q9l~FKyVomz4PsGctYhqe1tXSkMZtuiRpmhgtmiWTM8Zm8RdaqPxMBWzvgQgVYoX28RUpYNvjcSpXosBqjAKjD5w__'
             alt='icon' className='h-4/6' />
            <h1 className='text-4xl'>How our websites work?</h1>
        </div>
        <div className='h-72 w-full sm:w-5/12 flex flex-col justify-center items-start gap-2  ml-5 sm:ml-0'>
            <div className='h-1/3 w-5/6 border-b-2 border-black mt-4'>
                <h1 className='text-2xl font-semibold'>Step 1</h1>
                <h2>We first understand your travel plan</h2>
            </div>
            <div className='h-1/3 w-5/6 border-b-2 border-black'>
                <h1 className='text-2xl font-semibold'>Step 2</h1>
                <h2>Compare and analyses the expense</h2>
            </div>
            <div className='h-1/3 w-5/6 border-b-2'>
                <h1 className='text-2xl font-semibold'>Step 3</h1>
                <h2>Provide the best price to you and all set to go!</h2>
            </div>
        </div>
    </div>
  )
}

export default Work