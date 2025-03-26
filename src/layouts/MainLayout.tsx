import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import SidebarLayout from './components/SidebarLayout'
import HeaderLayout from './components/HeaderLayout'

const MainLayout = () => {
  return (
    <Box>
      <HeaderLayout />
      <SidebarLayout />
      <Box
        sx={{
          ml: (theme) => `calc(${theme.spacing(7)})`,
        }}
      >
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout
