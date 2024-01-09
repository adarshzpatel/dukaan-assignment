const SearchIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <g clipPath="url(#clip0_35241_3685)">
        <path
          fill="#999"
          d="M5.95 10.526c-2.509 0-4.55-2.046-4.55-4.561s2.041-4.561 4.55-4.561 4.55 2.046 4.55 4.56c0 2.516-2.041 4.562-4.55 4.562zm4.794-1.043A5.935 5.935 0 0011.9 5.965C11.9 2.675 9.23 0 5.95 0 2.67 0 0 2.676 0 5.965c0 3.289 2.67 5.965 5.95 5.965a5.906 5.906 0 003.84-1.418l2.463 2.468a.697.697 0 00.99 0 .702.702 0 000-.993l-2.499-2.504z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_35241_3685">
          <path fill="#fff" d="M0 0H14V14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
