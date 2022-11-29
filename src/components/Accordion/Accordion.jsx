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

export const Accordion = ({
  title,
  icon,
  expanded,
  subtitle,
  children,
  className,
  onChange,
}) => {
  return (
    <div
      className={
        expanded ? "accordion__container--expanded" : "accordion__container"
      }
      onClick={onChange}
    >
      <div
        className={
          expanded
            ? "accordion__header accordion__header--expanded"
            : "accordion__header"
        }
      >
        <div className="accordion__icon-placeholder">
          <div
            className="accordion__icon"
            style={{ backgroundImage: `url(${icon})` }}
          />
        </div>
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
      <div className={expanded ? "accordion__content" : "accordion__hidden"}>
        {children}
      </div>
    </div>
  );
};
