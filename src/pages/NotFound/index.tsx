// @ts-ignore
import Typical from "react-typical";

import "./styles.css";
import NotFoundImage from "../../assets/not-found.svg";
import { Header } from "../../components/Header";

export function NotFound() {
  return (
    <div className="not-found-content">
      <Header showDropDown={false}/>
      <div className="not-found-container">
        <img src={NotFoundImage} />
        <h1>Ops, não era o que você </h1>
        <Typical
          steps={[
            " estava pensando ...",
            3000,
            " estava procurando ...",
            3000,
            " queria ...",
            3000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
      </div>
    </div>
  );
}
