import axiosInstance from "./axios";

export const onGet = async (
  url: string,
  onDownloadProgress?: (event: ProgressEvent) => void
) => {
  await axiosInstance.get(url, {
    onDownloadProgress: (event: ProgressEvent) => {
      if (onDownloadProgress) {
        onDownloadProgress(event);
      }
    },
  });
};

export const onPost = async (
  url: string,
  params: object | null = {},
  onDownloadProgress?: (event: ProgressEvent) => void
) => {
  await axiosInstance.post(url, params, {
    onDownloadProgress: (event: ProgressEvent) => {
      if (onDownloadProgress) {
        onDownloadProgress(event);
      }
    },
  });
};

export const onPatch = async (url: string, params: object | null = {}) => {
  await axiosInstance.patch(url, params);
};

export const onDelete = async (url: string) => {
  await axiosInstance.delete(url);
};
