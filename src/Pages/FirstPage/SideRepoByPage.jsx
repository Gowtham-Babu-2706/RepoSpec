import { faArrowRightLong,faSpinner,faFaceGrinSquintTears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useUser} from "../../utils/axios/useUser";
import { Link } from "react-router-dom";
import Card from "../../utils/Card";

const SideRepoByPage = () => {
  const { data, loading, error, refetch } = useUser();

  if (loading) return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center text-lg font-medium">Api gets Suckss!!!<FontAwesomeIcon icon={faFaceGrinSquintTears} style={{color: "rgba(230, 0, 0, 1)",}} /></p>;

  return (
    <section className="py-12 px-7 lg:py-16 bg-white">
      <div className="flex justify-between items-center px-1 md:px-10">
        <div>
          <p className="text-lg md:text-xl">Featured repositories</p>
          <p className="text-sm text-gray-600">
            Hand-picked specialized projects
          </p>
        </div>

        <Link to={"/search"}>
          View All <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {data.map((repo) => (
          <Card key={repo.id} repo={repo}/>
        ))}

      </div>
      <div className="flex justify-center mt-10">
        <button onClick={refetch} className="px-6 py-3 bg-gray-400 text-white rounded-lg font-medium"><FontAwesomeIcon icon={faSpinner}  className={!loading ? "animate-spin" : ""} />  <span className="ml-3">Load More</span></button>
      </div>
    </section>
  );
};

export default SideRepoByPage;