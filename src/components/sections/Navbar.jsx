import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Title } from "../ui/Title";
import { Description } from "../ui/Description";
import { SubTitle } from "../ui/SubTitle";
import { ActionButton } from "../ui/ActionButton";
import { Statistic } from "./Statistic";

export const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About us",
      path: "/about",
    },
    {
      name: "Service",
      path: "/contact",
    },
    {
      name: "Project",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/about",
    },
    {
      name: "Page",
      path: "/contact",
    },
  ];

  return (
    <>
      <div className="bg-hero-image bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto px-3 flex justify-between py-4">
          <img
            src="https://show.moxcreative.com/automaton/wp-content/uploads/sites/16/elementor/thumbs/logo_automaton-pfwz6ha8ok02c9u0duxmjbyiv0ehz35r3t8kvgruo0.png"
            alt="logo"
            className=""
          />
          <div className="flex text-center">
            {links.map(({ name, path, j }) => {
              return (
                <>
                  <div
                    className="text-white py-4 font-medium mx-4 hover:text-[#00A0B1]"
                    key={j}
                  >
                    <Link to={path}>{name}</Link>
                  </div>
                </>
              );
            })}
            <Button text="Get started" />
          </div>
        </div>

        <div className="mt-32 max-w-7xl mx-auto px-3 flex justify-between items-baseline">
          <div className="p-12 mb-24 w-[640px] h-[381px]">
            <Title title="About us" />
            <SubTitle subtitle=" Artificial intelligence is not a matter of science fiction." />
            <Description
              description="Nulla fames finibus orci fusce pede phasellus consectetur vulputate
            consequat"
            />
          </div>
          <ActionButton style="mr-60" />
        </div>
      </div>

      <Statistic />
    </>
  );
};
