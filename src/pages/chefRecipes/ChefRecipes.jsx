import React from 'react';
import { motion } from 'framer-motion';
const ChefRecipes = (props) => {
    const{image,chefName,yearsOfExperience,likes,numRecipes ,id,bio }=props.chefInfo
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
      };
      const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
      };
      const likesVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
      };
      const recipesVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 1 } },
      };
      const experienceVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 1.2 } },
      };
    
      return (
        <motion.div
          className=" bg-amber-500 p-8 rounded-md flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.img
            src={image}
            alt={chefName}
            className="rounded-full w-64 h-64 md:w-80 md:h-80 mr-8"
            variants={imageVariants}
          />
          <div className="text-white">

          <motion.h1 className="text-3xl font-bold mb-2" variants={textVariants}>
              {chefName}
            </motion.h1>
            <motion.p className="text-xl mb-4" variants={textVariants}>
              {bio}
            </motion.p>
            <motion.div className="flex items-center mb-4" variants={likesVariants}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg mr-2">Likes:</p>
              <p className="text-lg font-bold">{likes}</p>
            </motion.div>
            <motion.div className="flex items-center" variants={recipesVariants}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg mr-2">Number of Recipes:</p>
              <p className="text-lg font-bold">{numRecipes}</p>
            </motion.div>
            <motion.div  className="flex items-center" variants={experienceVariants}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg mr-2">Years of experience:</p>
              <p className="text-lg font-bold">{yearsOfExperience}</p>
            </motion.div>
          </div>
          
        
    </motion.div>
    

         
        
    );
};

export default ChefRecipes;