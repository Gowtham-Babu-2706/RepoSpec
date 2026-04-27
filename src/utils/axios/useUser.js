import { useState, useEffect } from "react";
import {
  fetchAllData,
  fetchDataByName,
  createRepoData,
} from "./userApi";


export const useUser = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const getData = async (pageNum = 0) => {
    const res = await fetchAllData({ page: pageNum, size: 9 });
    setData(res.content);
  };

  useEffect(() => {
    getData(0);
  }, []);

  const loadMore = async () => {
    const next = page + 1;
    await getData(next);
    setPage(next);
  };

  return { data, refetch: loadMore };
};

export const useUserByName = (name = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (!name.trim()) return setData([]);

      const res = await fetchDataByName(name);
      setData(res);
    };

    getData();
  }, [name]);

  return { data };
};


export const useCreateRepo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const createRepo = async (payload) => {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const res = await createRepoData(payload);

      setSuccess(true);
      return res;
    } catch (err) {
      setError(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    createRepo,
    loading,
    error,
    success,
  };
};