//BedFront.tsx

import { PropTypeSvg } from './typesSVG.tsx';

const BedFront = ({
  color,
  heightsize,
  widthsize,
}: PropTypeSvg): JSX.Element => (
  <svg
    width={`${widthsize}px`}
    height={`${heightsize}px`}
    viewBox='0 0 48 48'
    xmlns='http://www.w3.org/2000/svg'
    //  {...props}
  >
    <path d='M0 0h48v48H0z' fill='none' />
    <g id='Shopicon'>
      <path
        d='M40,12H8v16H4v10v2v4h4v-4h32v4h4v-4v-2V28h-4V12z M16,26c0-1.103,0.897-2,2-2h12c1.103,0,2,0.897,2,2s-0.897,2-2,2H18 C16.897,28,16,27.103,16,26z M12,16h24v10c0-3.309-2.691-6-6-6H18c-3.309,0-6,2.691-6,6V16z M40,36H8v-4h10h12h10V36z'
        fill={color}
      />
    </g>
  </svg>
);
export default BedFront;
