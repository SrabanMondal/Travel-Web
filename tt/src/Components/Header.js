import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="w-full h-72 text-center py-10 flex justify-center items-center">
            <div className='w-1/2 h-full flex justify-center items-center'>
                <p className="w-9/12 text-sm sm:text-2xl text-center">We are a student team from IIT Patna of BSc-CSDA. This project is developed for the better analysis of travel expenses and making your travel plan much more pocket friendly.</p>
            </div>
            <div className='w-1/2 h-full flex justify-center items-center'>
            ,<img src='https://s3-alpha-sig.figma.com/img/42fc/f830/fd135247568905eb2172a99effb054be?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bts9szej0DXdnnjxNmWGPpenuWGrqcvrkB3awwWHzVDuAd-cntAgSLYZQeN9DjpSi1qZBR0-t6BHsoLPNzu6yE2VH1m7SC-cmYG7p9eW6IvObGtvDPmY~r75lbiO17D-P1IzK26x8DFKkXIpeqcuCI3FL8~CYVIpYwMgzbvREWqYO3IgSLp-43h4aXXuqROUpqdpK7SQ33rmjxBuM4Z-zq9WVwMqgFiTOdQpTo9vxC14qGuhk1srb3YzG0UUXw3kS8gwYPQdsSWZZrdhVjsVD53SemLPqjIbjhf10GLLXjtMZ9aIxnja7hi5v2I2PohJquIbEMOR46cBTtM4MFRiHA__'
            alt='icon' className='h-full'/>
            </div>
        </header>
    </div>
  )
}

export default Header