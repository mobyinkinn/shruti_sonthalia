import axios from "axios";
import { ApiUrl } from "./Api.js";

export const fetchBlogs = async () => {
  const response = await axios.get(`${ApiUrl}/blog/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createBlog = async (formData) => {
  const response = await axios.post(`${ApiUrl}/blog/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateBlog = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/blog/update?id=${id}`,
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await axios.get(`${ApiUrl}/blog/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchBlogById = async (id) => {
  const response = await axios.get(`${ApiUrl}/blog/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateImage = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/blog/update-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateBanner = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/blog/update-banner?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
