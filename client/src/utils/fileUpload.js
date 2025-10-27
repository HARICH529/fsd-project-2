import config from "../config/config";

// Upload single file
export const uploadSingleFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${config.API_BASE_URL}/api/upload/single`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    
    if (data.success) {
      return {
        success: true,
        fileUrl: `${config.API_BASE_URL}${data.fileUrl}`,
        filename: data.filename
      };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Upload multiple files
export const uploadMultipleFiles = async (files) => {
  try {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append("files", file);
    });

    const response = await fetch(`${config.API_BASE_URL}/api/upload/multiple`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    
    if (data.success) {
      return {
        success: true,
        fileUrls: data.fileUrls.map(url => `${config.API_BASE_URL}${url}`),
        filenames: data.filenames
      };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};