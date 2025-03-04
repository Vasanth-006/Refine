import React from "react";
import FigmaImage from "../components/FigmaImage"; // Import Storybook component

const RefineStorybookimage = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Figma Image from Storybook Component</h2>
            <FigmaImage nodeId="138:3" />
        </div>
    );
};

export default RefineStorybookimage;
