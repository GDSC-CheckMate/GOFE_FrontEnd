/**CommunityContext.jsx 파일은 React의 Context API를 사용하여 애플리케이션의 상태 관리
 * ※소모임 데이터를 중앙에서 관리하고, 여러 컴포넌트 간에 이 데이터를 쉽게 공유할 수 있게 해줌※
 *
 * 1. Context 생성: CommunityContext를 생성하여 애플리케이션의 다른 부분에서 사용할 수 있게한다
 * 2. 상태 관리: 소모임 데이터 (groups)와 소모임을 추가하는 함수 (addGroup)를 상태로 관리한다
 * 3. Provider 제공: CommunityProvider 컴포넌트를 통해 Context를 애플리케이션 트리에 주입
 * 이 컴포넌트는 Context의 값을 자식 컴포넌트들에게 제공하며, 자식 컴포넌트들은 이 값을 통해 상태를 읽거나 업데이트 함
 *
 * + 추가 변경사항
 * 커뮤니티 페이지에서 다른 페이지로 이동하면 소모임 관련 데이터가 사라지는 문제가 발생
 * 일단 임시로 로컬 스토리지를 사용하여 저장함 -> 이는 나중에 백엔드와의 통신을 위해 데이터를 저장하고 불러오는 방식으로 전환 예정
 */

import React, { createContext, useState, useEffect } from "react"

import communityData from "../../../api/mock/community.json"

export const CommunityContext = createContext()

const CommunityProvider = ({ children }) => {
  const [groups, setGroups] = useState(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const savedGroups = localStorage.getItem("groups")
    return savedGroups ? JSON.parse(savedGroups) : []
  })

  // 컴포넌트가 마운트될 때 데이터 페칭
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(communityData) // public 폴더 기준 경로
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setGroups((prevGroups) => {
          // 로컬 스토리지에 없는 데이터만 추가
          const newGroups = data.filter(
            (newGroup) => !prevGroups.some((group) => group.id === newGroup.id)
          )
          return [...prevGroups, ...newGroups]
        })
      } catch (error) {
        console.error("Failed to fetch community data", error)
      }
    }

    fetchGroups()
  }, [])

  // groups 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups))
  }, [groups])
  /**1. useEffect 훅 내에서 데이터 페칭과 로컬 스토리지 업데이트를 분리하여, 상태 변경 시 반복적인 데이터 페칭을 방지
   * 2. 상태 초기화 시 로컬 스토리지에서 데이터를 불러와 초기화
   * 3. 'groups' 상태가 변경될 때마다 로컬 스토리지에 저장하도록 설정하여, 상태가 유지되도록 함
   */

  const addGroup = (group) => {
    setGroups([...groups, group])
  }

  return (
    <CommunityContext.Provider value={{ groups, addGroup }}>
      {children}
    </CommunityContext.Provider>
  )
}

export default CommunityProvider
