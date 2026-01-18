export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Login
        </button>
      </form>
    </div>
  )
}
