import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <>
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="138" cy="135" r="127" />
      <rect x="0" y="278" rx="19" ry="19" width="280" height="32" />
      <rect x="139" y="294" rx="0" ry="0" width="3" height="11" />
      <rect x="0" y="320" rx="20" ry="20" width="280" height="82" />
      <rect x="250" y="371" rx="0" ry="0" width="1" height="0" />
      <rect x="-1" y="425" rx="14" ry="14" width="94" height="30" />
      <rect x="41" y="439" rx="0" ry="0" width="0" height="9" />
      <rect x="126" y="417" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
  </>
);

export default Skeleton;
