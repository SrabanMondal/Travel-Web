import React from 'react';
import LocationCard from './LocationCard';

const locations = [
  { image: 'https://s3-alpha-sig.figma.com/img/bb3f/ddf2/cc51b2b62a3ae9df34f1e764ccba91ac?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko5ogLy-O4vu5KNimfGKT2Bl4XcPjSmnK5YQe8TJClSn7sltqAQnvjnzEOfr56Tejaqr6X61aBUDi280gjPLIUG2m1UnPosFljnIibs4COrKiU5BF2YAKdQ~li6EPXSg6RHE7ZBdjXOObW2llrNsgTDsSPn~EN0M073A-DMIm4JogtW-4IGDibQ8M2oc6Qv-nqIAmLBu9MNLAOgV0MA-N~zdWCtw5RjfracliVwMvRvnp3yoaE7uJS~1k1jZT0gIQnK8q07XlVxY6f1tvKGkMlEqQ~QdIsBKVydDqrupVdrSNqm4kk-ZVynUvSrJxpVJ2QPZbGBjQc4TztUW3AVbUA__',
     name: 'Taj Mahal', rating: 4.5, reviews: 2500, distance: '500 km', location: 'Agra' },
  // Add more location objects as needed
];

const LocationResults = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold">Best Results Match Your Location:</h2>
      <div className="mt-6 bg-gray-200 h-64 w-full max-w-4xl mx-auto rounded-lg shadow-md"></div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </div>
    </section>
  );
};

export default LocationResults;
