import React from "react";
import ImageDisplay from "../components/ImageDisplay";  // Cloudinary Image
import RefineStorybookimage from "../components/RefinePage";  // Storybook Component

const CombinedImagePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">All Images on One Page</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                
                {/* Cloudinary Image */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <ImageDisplay />
                </div>

                {/* Storybook Image */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Image from Storybook Component</h3>
                    <RefineStorybookimage />
                </div>
            </div>

            {/* Upload Button */}
            
        </div>
    );
};

export default CombinedImagePage;
