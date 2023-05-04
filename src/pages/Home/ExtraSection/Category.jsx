import React from 'react';

const Category = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 bg-slate-50 shadow-lg">
        <h2 className="md:text-6xl text-3xl font-extrabold text-gray-900 text-center mt-4 md:mt-12">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-20">
          
           <div className="grid text-center ">
           <div
              className=" rounded-full hover:cursor-pointer overflow-hidden  hover:rotate-3 hover:shadow-lg transition-all duration-300"
            >
              <img
                src='https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/beef-steak-tomahawk-S3JHQLN-omrts6h2r6ooajb7o7fsckvwj4sv3smiz698m6z25c.jpg'
                alt='Beef'
                className="w-full  h-full object-cover"
              />
             
               
              
            </div>
            <h3 className='text-3xl p-2 text-zinc-900 font-bold'>Beef</h3>
           </div>
           <div className="grid text-center">
           <div
              className=" rounded-full hover:cursor-pointer overflow-hidden  hover:rotate-3 hover:shadow-lg transition-all duration-300"
            >
              <img
                src='https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/baked-chicken-breast-9C4F43W-omrrd2rhfvg4fdu0ak0dak66tq4dtitz01xfn44eqo.jpg'
                alt='Beef'
                className="w-full hover:cursor-pointer h-full object-cover"
              />
             
               
              
            </div>
            <h3 className='text-3xl p-2 text-zinc-900 font-bold'>Chicken</h3>
           </div>
           <div className="grid text-center">
           <div
              className=" rounded-full hover:cursor-pointer overflow-hidden  hover:rotate-3 hover:shadow-lg transition-all duration-300"
            >
              <img
                src='https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-omrff2jgxcsv5cfw86lk4kjvmzkfiaqk7pxv13p38g.jpg'
                alt='Beef'
                className="w-full hover:cursor-pointer h-full object-cover"
              />
             
             
              
            </div>
            <h3 className='text-3xl p-2 text-zinc-900 font-bold'>Vegetarian</h3>
           </div>
           <div className="grid text-center">
           <div
              className=" rounded-full hover:cursor-pointer overflow-hidden  hover:rotate-3 hover:shadow-lg transition-all duration-300"
            >
              <img
                src='https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/pecan-pie-tart-in-baking-dish-traditional-festive-9WMXQ3Z-omrtq2c5dlsg64dt0sj08m3kex84sb89opewqs3y5c.jpg'
                alt='Beef'
                className="w-full hover:cursor-pointer h-full object-cover"
              />
             
               
              
            </div>
            <h3 className='text-3xl p-2 text-zinc-900 font-bold'>Desserts</h3>
           </div>
        </div>
      </div>
    );
};

export default Category;