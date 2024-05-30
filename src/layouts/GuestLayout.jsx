import { Outlet } from "react-router-dom"

function GuestLayout() {
  return (
    <div>
        Guest
      <Outlet />
    </div>
  )
}

export default GuestLayout
