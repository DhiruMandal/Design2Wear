export default function JerseyPreview({ color, name, number, view, logo }) {
  return (
    <div className="flex justify-center">
      <div
        className="w-64 h-80 rounded-lg relative flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {view === "front" ? (
          <>
            {/* Logo */}
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                className="absolute top-10 w-20 h-20 object-contain"
              />
            ) : (
              <div className="absolute top-10 text-white font-semibold">
                LOGO
              </div>
            )}

            <div className="absolute bottom-6 text-white text-sm">
              Design2Wear
            </div>
          </>
        ) : (
          <>
            {/* Back View */}
            <div className="absolute top-8 text-white text-lg font-bold">
              {name || "PLAYER"}
            </div>

            <div className="text-white text-6xl font-extrabold">
              {number || "00"}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
