import React, { useState } from 'react';
const Header2 = () => {
  const [from, setfrom] = useState('');
  const [to, setto] = useState('');
  const [vehicle, setvehicle] = useState('');
  return (
    <header className="text-center h-fit w-full flex flex-col justify-center items-center"> 
      <img src="https://s3-alpha-sig.figma.com/img/39ac/053d/52d986ce735ba1d4e5eb9c37c4dd786f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fbJbOdrKHCSyVmQMjhmY4yhJ5hFYvGG96pS1420Ebe5XW8Kocnd4Cd1FRyXRAuV-0oR4X03bbGgr2CQo-LTNASEvKnUwKcoZJHpSsU4VC~eWW8YymxyJpWwF7~47cEKZW5-dwNhrDF8GQdqcXR1k~Xbc5Jn90KkfNTYCFGkREox3rUClrXF0Y3mv3doK4zUyICh3-AAC~1lDF2uBwfm-YJeJMWMqwx0i3O3asBNdYz4FIJwuteN-dsoOtC7fR50~Y3auiHFSQyUIpoqo23JTVqItP~gK50MVtyBWcnIW7kVDXwuD4EP1rEfPLymSPniUC7CNIrSY~u55YlOXnH-HjA__"
      alt="Travel" className="w-11/12 object-cover rounded-2xl lg:w-3/5 md:4/5 sm:w-5/6 mt-10" />
      <div className="w-10/12 h-fit bg-white flex flex-row justify-between items-center pb-5 pt-5 px-5 rounded-3xl -translate-y-12 sm:w-4/6 md:w-9/12 lg:w-1/2 sm:pt-7 sm:pb-10">
        <label className='w-3/12 h-full flex flex-col justify-center items-center gap-2 text-sm sm:text-lg'>
          <div>From:-</div>
        <input type="text" placeholder="From" value={from} onChange={(e)=>setfrom(e.target.value)} className="p-2 w-11/12 rounded border leading-none" />
        </label>
        <div className='border-r-2 border-black h-20 w-1'></div>
        <label className='w-3/12 h-full flex flex-col justify-center items-center gap-2'>
        <div>To:-</div>
        <input type="text" placeholder="To" value={to} onChange={(e)=>setto(e.target.value)} className="p-2 w-11/12 rounded border leading-none" />
        </label>
        <div className='border-r-2 border-black h-20 w-1'></div>
        <label className='w-3/12 h-full flex flex-col justify-center items-center gap-2'>
        <div>Vehicle:-</div>
        <input type="text" placeholder="Vehicle" value={vehicle} onChange={(e)=>setvehicle(e.target.value)} className="p-2 w-11/12 rounded border leading-none" />
        </label>
        <div className='border-r-2 border-black h-20 w-1'></div>
        <button className="w-1/12 py-1 h-fit bg-blue-500 text-white rounded flex justify-center items-center">
          <img src='https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='arrow' className='w-4/5'/>
        </button>
      </div>
    </header>
  );
};

export default Header2;
