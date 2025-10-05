import { Outlet } from 'react-router-dom'
// import { Header } from '@components/layout/Header'
// import { Footer } from '@components/layout/Footer'

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}