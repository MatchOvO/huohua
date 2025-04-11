import type { SVGProps } from 'react';
const Logo1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    style={{
      userSelect: 'none',
      flexShrink: 0,
    }}
    {...props}
  >
    <path
      d="M12 3C11 5 9.5 7.5 9.5 10C9.5 12.5 11 14.5 12 15C13 14.5 14.5 12.5 14.5 10C14.5 7.5 13 5 12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 14C7 17.866 9.13401 21 12 21C14.866 21 17 17.866 17 14C17 11.5 15.5 9.5 14.5 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9.5" cy="10" r="0.5" fill="currentColor" />
    <circle cx="14.5" cy="10" r="0.5" fill="currentColor" />
  </svg>
);
export default Logo1Icon;
