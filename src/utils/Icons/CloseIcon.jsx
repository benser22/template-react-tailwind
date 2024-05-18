import PropTypes from 'prop-types';

function CloseIcon({ color, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.9em"
      height="0.9em"
      viewBox="0 0 24 24"
    >
      <path
        className={className}
        fill="none"
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
      ></path>
    </svg>
  );
}

CloseIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default CloseIcon;
