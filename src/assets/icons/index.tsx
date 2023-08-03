type IconProps = {
  className?: string;
};

export const GridLayoutIcon = (props: IconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path d="M5 1v8H1V1h4zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm13 2v5H9V2h5zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9zM5 13v2H3v-2h2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm12-1v2H9v-2h6zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9z"></path>
  </svg>
);
export const ListLayoutIcon = (props: IconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    version="1.1"
    viewBox="0 0 17 17"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <g></g>
    <path d="M15 4h-9v-1h9v1zM6 5v1h11v-1h-11zM0 2h5v5h-5v-5zM1 6h3v-3h-3v3zM15 10h-9v1h9v-1zM6 13h11v-1h-11v1zM0 9h5v5h-5v-5zM1 13h3v-3h-3v3z"></path>
  </svg>
);
