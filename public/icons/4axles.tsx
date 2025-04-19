interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  [key: string]: any;
}

export const Icon4Axles = ({
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || props.size}
    height={props.height || props.size}
    viewBox="0 0 200 35"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <g>
      <polygon
        className="st0"
        points="197.5,19.9 191.3,18.5 57,18.5 57,15.1 53,14.1 10,14.1 10,4.5 2.5,4.5 2.5,16.7 52.8,16.7 54.8,16.9 
		54.8,21.5 192.5,21.5 197.5,22.8 	"
      />
      <polygon
        className="st0"
        points="52.9,16.2 52.9,28.4 51.8,30.5 56.3,30.5 55.2,28.4 55.2,16.6 	"
      />
      <path
        className="st0"
        d="M107.9,20c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2C113.1,22.3,110.8,20,107.9,20z
		 M107.9,28.1c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3s3,1.3,3,3C110.9,26.8,109.6,28.1,107.9,28.1z"
      />
      <path
        className="st0"
        d="M139.8,20c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C144.9,22.3,142.6,20,139.8,20z
		 M139.8,28.1c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3c1.6,0,3,1.3,3,3C142.7,26.8,141.4,28.1,139.8,28.1z"
      />
      <path
        className="st0"
        d="M156.7,20c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C161.9,22.3,159.6,20,156.7,20z
		 M156.7,28.1c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3c1.6,0,3,1.3,3,3C159.7,26.8,158.3,28.1,156.7,28.1z"
      />
      <path
        className="st0"
        d="M174,20c-2.9,0-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2C179.2,22.3,176.9,20,174,20z
		 M174,28.1c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3c1.6,0,3,1.3,3,3C177,26.8,175.7,28.1,174,28.1z"
      />
      <polygon
        className="st0"
        points="144.6,21.3 146.6,24.7 150.1,24.7 152,21.3 	"
      />
      <polygon
        className="st0"
        points="161.7,21.3 163.7,24.7 167.2,24.7 169,21.3 	"
      />
      <rect x="116.4" y="21" className="st0" width="15.1" height="5.2" />
      <rect x="180.3" y="21" className="st0" width="11.4" height="5.2" />
      <rect x="74.2" y="21" className="st0" width="25.2" height="5.2" />
    </g>
  </svg>
);
