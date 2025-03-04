export const uploadToCloudinary = async (imageUrl: string) => {
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    console.log("CLOUD_NAME",CLOUD_NAME)
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    console.log("UPLOAD_PRESET",UPLOAD_PRESET)
  
    const formData = new FormData();
    formData.append("file", imageUrl);
    formData.append("upload_preset", UPLOAD_PRESET);

    console.log("formdata",formData)
  
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: formData,
    });

    console.log("response",response)
  
    const data = await response.json();
    return data.secure_url;
  };
  