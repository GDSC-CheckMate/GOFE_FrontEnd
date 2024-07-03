import React from "react"
import PropTypes from "prop-types"
// import '../scss/components/_communityItem.scss';

const CommunityItem = ({ group }) => (
  <div className="group-item">
    <div className="group-icon">
      <img src={group.image} alt={group.name} />
    </div>
    <div className="group-details">
      <div className="group-name">{group.name}</div>
      <div className="group-notice">{group.notice}</div>
    </div>
    <div className="group-info">
      <div className="group-time">{group.time}</div>
      {group.badge && <div className="group-badge">{group.badge}</div>}
    </div>
  </div>
)

CommunityItem.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    notice: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    badge: PropTypes.string,
  }).isRequired,
}

export default CommunityItem
