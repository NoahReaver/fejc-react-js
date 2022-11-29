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
      <Link to={to}>
        <div className="icon-link__container">
          <div
            className="icon-link__image"
            style={{ backgroundImage: `url(${icon})` }}
          />
          <div className="icon-link__label-frame">
            <div className="icon-link_label-text">{label}</div>
          </div>
        </div>
      </Link>
    </>
  );
};
