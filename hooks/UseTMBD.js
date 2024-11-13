import { useState, useEffect } from "react";
import axios from "axios";
import { TMDB_apiKey } from "@/config";

const useTMDB = (type,field) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFromApi = async () => {
      try {
        const url = `https://api.themoviedb.org/3/${type}/${field}?language=en-US&page=1`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_apiKey}`,
          },
        };
        const response = await axios.get(url, options);
        setList(response.data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFromApi();
  }, []);

  return { list, loading, error };
};

export default useTMDB;
