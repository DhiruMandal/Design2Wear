const VerifyOtp = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow">
      <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

      <input className="border p-2 w-full mb-3" placeholder="Enter OTP" />

      <button className="bg-black text-white w-full py-2">
        Verify
      </button>
    </div>
  )
}

export default VerifyOtp
