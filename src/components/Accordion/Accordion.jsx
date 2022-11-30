/**
 * @callback AccordionOnChange
 * @param {boolean} newExpandedState
 */

/**
 *
 * @param {string} title
 * @param {React.ReactNode} [icon]
 * @param {boolean} [expanded]
 * @param {string} [subtitle]
 * @param {React.ReactNode} [children]
 * @param {string} [className]
 * @param {AccordionOnChange} [onChange]
 * @returns {JSX.Element}
 * @constructor
 */

import { useRef, useState } from "react";

export const Accordion = ({
  title,
  icon,
  expanded,
  subtitle,
  children,
  className,
  onChange,
  innerRef,
}) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const contentRef = useRef();

  function accordionOnClick() {
    setTimeout(() => contentRef.current.scrollTo(0, 0), 1);
    setFirstLoad(false);
    onChange();
  }

  return (
    <div className="accordion__frame">
      <div
        ref={innerRef}
        className={`${
          expanded
            ? "accordion__container--expanded"
            : "accordion__container--collapsed"
        } ${className} ${
          firstLoad ? "accordion__no-animation" : ""
        } accordion__container`}
        onClick={accordionOnClick}
      >
        <div
          className={`accordion__header ${
            expanded
              ? "accordion__header--expanded"
              : "accordion__header--collapsed"
          }`}
        >
          {icon && <div className="accordion__icon-placeholder">{icon}</div>}
          <div className="accordion__text">
            <div className="accordion__title">{title}</div>
            <div className={subtitle ? "accordion__subtitle" : ""}>
              {subtitle}
            </div>
          </div>
          <div className="accordion__arrow-container">
            <div
              className={
                expanded
                  ? "accordion__arrow-up icon-arrow-up"
                  : "accordion__arrow-down icon-arrow-down"
              }
            />
          </div>
        </div>
        <div
          ref={contentRef}
          className={expanded ? "accordion__content" : "accordion__hidden"}
        >
          {children}
        </div>
      </div>{" "}
    </div>
  );
};
