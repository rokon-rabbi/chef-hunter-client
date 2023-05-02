import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              At [Website Name], we're passionate about creating delicious food that brings people together. Whether you're looking for a quick and easy meal or something more elaborate to impress your guests, we have something for everyone.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-900">Our Story</h3>
            <p className="mt-4 text-base text-gray-500">
              [Website Name] was founded in [Year] by [Founder Name]. After years of working in the food industry, [Founder Name] realized there was a need for a platform that could bring together the best chefs, restaurants, and home cooks to showcase their culinary creations.
            </p>
            <p className="mt-4 text-base text-gray-500">
              Since then, we've grown into a thriving community of food lovers and culinary experts. Our mission is simple: to make it easy for people to discover and enjoy amazing food from around the world.
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;