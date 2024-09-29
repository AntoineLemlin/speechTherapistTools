import { NavLink } from "react-router-dom";
import tools from "../data/tools";

const Home = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-base-200">
      <div className="text-center max-w-screen-lg w-full">
        <h2 className="text-2xl font-bold mb-5">Outils</h2>
        <ul className="bg-base-200 rounded-box w-full">
          <li>
            <ul className="flex flex-wrap justify-evenly gap-y-5">
              {tools.map((tool) => (
                <li>
                  <NavLink
                    to={tool.path}
                    className="card w-96 bg-base-100 shadow-xl"
                  >
                    <div className="card-body">
                      <h2 className="card-title font-bold">{tool.name}</h2>
                      <p>{tool.description}</p>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
