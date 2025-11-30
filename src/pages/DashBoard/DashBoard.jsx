import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar'
import { AppSidebar } from '../../components/AppSidebar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashBoard({ children }) {
  const navigate = useNavigate()
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo) navigate('/signin')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}