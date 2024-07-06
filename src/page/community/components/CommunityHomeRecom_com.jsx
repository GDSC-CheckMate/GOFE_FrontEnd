import React from "react";

const CommunityHomeRecom_com = ({ recommend }) => {
  if (!recommend) {
    return null;
  }
  const { name, host, member } = recommend;
  return (
    <div className="community-home-recommend-show-more">
      <div className="community-home-recommend-show-community-name">{name}</div>
      <div className="community-home-recommend-show-content-detail">
        <div className="community-home-recommend-show-content-detail-host">
          호스트명:{host}
        </div>
        <div className="community-home-recommend-show-content-detail-member">
          맴버:{member}
        </div>
      </div>
    </div>
  );
};

export default CommunityHomeRecom_com;
