import { Outlet } from "react-router-dom"

function DefaultLayout() {
  return (
    <div>
        Default
      <Outlet />
    </div>
  )
}

export default DefaultLayout
