export default function Topbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      <button
        onClick={() => {
          localStorage.removeItem("token")
          window.location.href = "/login"
        }}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Logout
      </button>
    </header>
  )
}
