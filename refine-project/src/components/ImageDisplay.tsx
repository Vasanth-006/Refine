import React from "react";

const CLOUD_NAME = "dhvtqgtok"; // Replace with your Cloudinary cloud name
const IMAGE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1741069065/oyfmbhjcmxhwvaiekrmc.png`;

const ImageDisplay = () => {
    return (
        <div className="flex flex-col items-center">
            <h1>Fetched Image from Cloudinary</h1>
            <img src={IMAGE_URL} alt="Fetched from Cloudinary" style={{ width: "300px", borderRadius: "10px" }} />
        </div>
    );
};

export default ImageDisplay;
