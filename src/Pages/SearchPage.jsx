import { useEffect, useState } from "react";
import Card from "../utils/Card";
import { useRepoSearch, useUser } from "../utils/axios/useUser";

const SearchPage = () => {
  const [showAdvanced, setShowAdvanced] = useState(true);

  const [filters, setFilters] = useState({
    name: "",
    language: "",
    minStars: "",
  });

  // ✅ Correct hook usage
  const { data: userData, loading: userLoading } = useUser();
  const { data = [], loading, search } = useRepoSearch();
  useEffect(() => {
    handleSearch()
  }, []);

  const handleSearch = () => {
    const cleanFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v !== "")
    );

    search(cleanFilters);
  };

  return (
    <section className="py-12 px-7 bg-white">
      <h2 className="text-xl font-semibold mb-6">Search Repositories</h2>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search name"
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({ ...filters, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Language"
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({ ...filters, language: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Min stars"
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({ ...filters, minStars: e.target.value })
          }
        />
      

        <button
          onClick={handleSearch}
          className="  px-6 py-2 bg-black text-white rounded-lg"
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-4">Searching...</p>}

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {data.length > 0 ? (
          data.map((repo) => (
            <Card key={repo.id} repo={repo} />
          ))
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </section>
  );
};

export default SearchPage;