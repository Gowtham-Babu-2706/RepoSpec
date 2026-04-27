import api from "./api";

export const fetchAllData = async ({ page = 0, size = 9 }) => {
  const resp = await api.get(`/git?page=${page}&size=${size}`);
  return resp.data;
};

export const fetchDataByName = async (name) => {
  const resp = await api.get(`/git/search?name=${name}`);
  return resp.data;
};

export const createRepoData = async (data) => {
  const resp = await api.post("/git", data);
  return resp.data;
};