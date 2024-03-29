const InfoIcon = ({...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        fill="#4D4D4D"
        fillRule="evenodd"
        clipPath="url(#clip0_35241_2522)"
        clipRule="evenodd"
      >
        <path d="M7.778 10.18a.778.778 0 11-1.555 0 .778.778 0 011.555 0zM6.127 3.408a2.281 2.281 0 111.34 4.34v.1a.467.467 0 11-.933 0V7.33A.467.467 0 017 6.863a1.348 1.348 0 10-1.348-1.348.467.467 0 11-.933 0 2.281 2.281 0 011.408-2.107z"></path>
        <path d="M7 1.634a5.367 5.367 0 100 10.733A5.367 5.367 0 007 1.634zM.7 7a6.3 6.3 0 1112.6 0A6.3 6.3 0 01.7 7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_35241_2522">
          <path fill="#fff" d="M0 0H14V14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default InfoIcon;
