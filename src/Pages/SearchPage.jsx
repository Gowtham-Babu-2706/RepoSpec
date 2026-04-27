import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../utils/Card";
import { useUserByName } from "../utils/axios/useUser";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const [name, setName] = useState("");
  const [debouncedName, setDebouncedName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedName(name);
    }, 500); // wait 500ms

    return () => clearTimeout(timer);
  }, [name]);

  const { data, loading } = useUserByName(debouncedName);

  return (
    <section className="py-12 px-7 lg:py-16 bg-white">
      <div className="px-1 md:px-10">
        <p className="text-lg md:text-xl font-semibold">
          Search repositories
        </p>
      </div>

      <div className="mt-8 px-1 md:px-10">
        <div className="relative max-w-2xl">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search repos..."
            className="w-full pl-11 h-12 rounded-xl border border-gray-300 px-4"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="mt-4 px-10">Searching...</p>}

      <div className="grid md:grid-cols-2 gap-6 mt-10 px-1 md:px-10">
        {data.map((repo) => (
          <Card key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default SearchPage;