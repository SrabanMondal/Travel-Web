import React from 'react';

const PopularDestinations = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold">Popular Destinations:</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(4).fill().map((_, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <img src="https://s3-alpha-sig.figma.com/img/9dba/79f0/0965b2acaba1145360d4ebeb577fc88a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUVLi0BU01~QBUfU4SDE8eGkXjRZCKA7phzxY4k2wdefpSSHzbgO~J~r5yLtUiXYFRlNs~TOugoQjOfESHLCmntOHdNjcKKgL84XSibYnq0uW1P1JehP0iKpECVgKfas1nVexyW2j2wVq~cusCN92vmPQzVv~iSbuTxa8q6jUf~2ZOyPLmen-Yz4YCiV9ofwDuC~FVgv2u~iC08wCJ879yGy~V7855ZJzwqX9tSUjjRqLEEyLq0YmhmGhWJmnQ~Gl7ABh~aGFeA46VVqzNbAOyaKpxIL2hbMbVymU46mVpHG5VGvs~kiEK7DhqF51sllL4nZjhq28HyGwvZRpeUyaQ__"
            alt="Destination" className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">Delhi</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
