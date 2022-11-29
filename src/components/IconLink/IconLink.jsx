import { ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {React.ReactNode} icon
 * @param {string} label
 * @param {To} to (react-router To)
 * @returns {JSX.Element}
 * @constructor
 */
export const IconLink = ({ icon, label, to }) => {
  return (
    <>
      <Link className="icon-link__container" to={to}>
        <div className="icon-link__image ">{icon}</div>
        <div className="icon-link__label-frame">
          <div className="icon-link_label-text">{label}</div>
        </div>
      </Link>
    </>
  );
};
