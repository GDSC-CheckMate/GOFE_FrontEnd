import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGroups } from "../../../redux/communitySlice"
import CommunityItem from "./CommunityItem"
import CommunityHeader from "./CommunityHeader"
import { useNavigate } from "react-router-dom"

const CommunityMainPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const groups = useSelector((state) => state.community.groups)
  const groupStatus = useSelector((state) => state.community.status)

  useEffect(() => {
    if (groupStatus === "idle") {
      dispatch(fetchGroups())
    }
  }, [groupStatus, dispatch])

  const handleGroupClick = (groupId) => {
    navigate(`/group/${groupId}/home`)
  }

  return (
    <div className="community-page">
      <CommunityHeader />
      <div className="community-subheader">
        <span className="community-subheader-title">참여중인 소모임</span>
        <button
          className="community-create-group-button"
          onClick={() => navigate("/creategroup")}
        >
          + 소모임 개설
        </button>
      </div>
      <div className="community-group-list">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} onClick={() => handleGroupClick(group.id)}>
              <CommunityItem group={group} />
            </div>
          ))
        ) : (
          <p>참여중인 커뮤니티를 찾을 수 없음</p>
        )}
      </div>
    </div>
  )
}

export default CommunityMainPage