import { Outlet } from 'react-router-dom'
// import { GameSidebar } from '@components/game/GameSidebar'

export const GameLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* <GameSidebar /> */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}