import React, { useEffect, useState } from "react";
import { fetchFigmaImage } from "../components/api/figma";
import { uploadToCloudinary } from "../components/api/cloudinary";

const FigmaImage = ({ nodeId }: { nodeId: string }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const url = await fetchFigmaImage(nodeId);
      setImageUrl(url);
    };
    fetchImage();
  }, [nodeId]);

  const handleUpload = async () => {
    if (!imageUrl) return;
    const cloudinaryUrl = await uploadToCloudinary(imageUrl);
    console.log("Uploaded Image URL:", cloudinaryUrl);
  };

  return (
    <div>
      {imageUrl ? (
        <div className="flex flex-col ">
          <img src={imageUrl} alt="Figma design" width="300" />
          <div className="flex justify-center mt-6">
                <button onClick={handleUpload} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all">
                    Upload to Cloudinary
                </button>
            </div>
        </div>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default FigmaImage;
