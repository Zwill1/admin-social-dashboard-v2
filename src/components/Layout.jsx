import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
        <main className="App">
          <p>layout</p>
          <Outlet />
        </main>
    </>
  )
}
