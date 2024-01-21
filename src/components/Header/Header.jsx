import { Container } from "components/Container";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Container>
        <div className="bg-blue-600">
          <div className="flex justify-center items-center gap-[20px] min-h-[100px]">
            <NavLink
              to="/home"
              className="text-white font-semibold hover:text-yellow-300"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className="text-white font-semibold hover:text-yellow-300"
              activeClassName="active"
            >
              Catalog
            </NavLink>
            <NavLink
              to="/favorites"
              className="text-white font-semibold hover:text-yellow-300"
              activeClassName="active"
            >
              Favorites
            </NavLink>
          </div>
        </div>
      </Container>
    </>
  );
};