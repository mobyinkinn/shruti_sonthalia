import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  fetchBlogById,
  updateImage,
  updateBanner,
} from "../../services/api.blog";

import toast from "react-hot-toast";

export const useBlogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Blogs"],
    queryFn: fetchBlogs,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useBlogById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Blog", id],
    queryFn: () => fetchBlogById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewBlog, isPending: isCreating } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Blog:", error);
      toast.error("Failed to create Blog. Please try again.");
    },
  });

  return { createNewBlog, isCreating };
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Blog:", error);
      toast.error("Failed to update Blog. Please try again.");
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Blog:", error);
      toast.error("Failed to delete Blog. Please try again.");
    },
  });
};

export const useUpdateBlogImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Blog image:", error);
      toast.error("Failed to update Blog image. Please try again.");
    },
  });
};

export const useUpdateBlogBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Blog banner:", error);
      toast.error("Failed to update Blog banner. Please try again.");
    },
  });
};
