// Raw SVG data for logo.
const PATH_DATA = `
  M.8 49.6h9.5V19H.8v30.6zM30.3 50.5a16.2 16.2 0 0 1 0-32.4v9.5a6.7 6.7 0 0 0
  0 13.4v9.5zM48.5.9a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0 -13.4zm6.7 33.4a6.7
  6.7 0 1 0-13.4 0 6.7 6.7 0 0 0 13.4 0zm9.5 0a16.2 16.2 0 1 1-32.4 0 16.2 16.2
  0 0 1 32.4 0zM80 19H68.5v30.6H78v-21h2c3.6 0 6.6 3 6.6 6.7v14.3h9.6V35.3c0-9
  -7.3-16.3-16.2 -16.3z
`;
const VIEW_BOX = '0 0 97 51';

export const Logo = ({
  height,
  width,
}: {
  // Size properties, both of which are optional. If none are provided, we use
  // a default value, defined below.
  height?: number;
  width?: number;
}) => {
  // Set default height to 40px, if no height or width is provided.
  const svgHeight = !height && !width ? 40 : height;

  // Define the gradient #logo-gradient if we are rendering the color as a
  // gradient, with an array of stops and colors instead of a single color.
  const defs = (
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop stopColor="#73A7EF">
          <animate
            attributeName="stop-color"
            begin="2s"
            dur="10s"
            repeatCount="indefinite"
            values="#73A7EF; #A38EDB; #EA63C3; #73A7EF"
          />
        </stop>
        <stop offset="0.4" stopColor="#A38EDB">
          <animate
            attributeName="stop-color"
            begin="2s"
            dur="8s"
            repeatCount="indefinite"
            values="#A38EDB; #EA63C3; #73A7EF; #A38EDB"
          />
        </stop>
        <stop offset="1" stopColor="#EA63C3">
          <animate
            attributeName="stop-color"
            begin="2s"
            dur="6s"
            repeatCount="indefinite"
            values="#EA63C3; #73A7EF; #A38EDB; #EA63C3"
          />
        </stop>
      </linearGradient>
    </defs>
  );

  return (
    <svg height={svgHeight} width={width} viewBox={VIEW_BOX}>
      <title>ICON Technology</title>
      {defs}
      <path
        fill="url(#logo-gradient)"
        fillRule="nonzero"
        d={PATH_DATA}
      />
    </svg>
  );
};

export default Logo;
