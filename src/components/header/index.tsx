import { button, listItem, navLink } from "@/styles";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => (
  <header className="bg-tertiary-color dark:bg-tertiary-dark-color flex w-dvw justify-center px-4 py-2">
    <nav className="flex w-full max-w-screen-2xl flex-col items-center gap-4 text-white md:flex-row md:justify-between">
      <figure className="flex items-center gap-2">
        <FontAwesomeIcon icon={faTooth} />
        <p className="font-bold uppercase">Logo</p>
      </figure>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4">
        <li className={listItem({ hoverEffect: "primary" })}>
          <a className={navLink()} href="">
            Serviços
          </a>
        </li>
        <li className={listItem({ hoverEffect: "primary" })}>
          <a className={navLink()} href="">
            Time
          </a>
        </li>
        <li className={listItem({ hoverEffect: "primary" })}>
          <a className={navLink()} href="">
            Feedbacks
          </a>
        </li>
        <li className={listItem({ hoverEffect: "primary" })}>
          <a className={navLink()} href="">
            Perguntas Frequentes
          </a>
        </li>
        <li className={listItem({ hoverEffect: "primary" })}>
          <a className={navLink()} href="">
            Convênios
          </a>
        </li>
      </ul>
      <button className={button({ color: "primary", hoverEffect: "primary" })}>
        Agendar Consulta
      </button>
    </nav>
  </header>
);
