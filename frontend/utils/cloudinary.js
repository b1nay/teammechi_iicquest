// utils/cloudinary.js
export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
  
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Cloudinary upload failed');
    }
  
    const data = await response.json();
    return data.secure_url;
  };
  