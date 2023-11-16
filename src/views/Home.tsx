import {StarIcon} from "@heroicons/react/20/solid";
import {NavLink, Outlet} from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center bg-base-100 max-w-screen-lg w-full">
        <ul className="menu bg-base-200  rounded-box w-full">
          <li>
            <h2 className="menu-title">Outils</h2>
            <ul className="flex flex-wrap justify-evenly gap-y-5">
              <li>
                <NavLink to="/starsGame" className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title font-bold"><StarIcon className="w-4 h-4"/> Récompenses étoiles</h2>
                    <p>Système de récompenses avec des étoiles</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home;