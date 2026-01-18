import { useState } from "react"
import JerseyPreview from "../components/JerseyPreview"

export default function Customize() {
  const [color, setColor] = useState("#1e40af")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [view, setView] = useState("front")
  const [logo, setLogo] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => setLogo(reader.result)
    reader.readAsDataURL(file)
  }

  // 🔥 SAVE DESIGN TO BACKEND
  const saveDesign = async () => {
    try {
      setLoading(true)

      const response = await fetch("http://localhost:5000/api/design/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          color,
          name,
          number,
          view,
          logo,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to save design")
      }

      alert("Design saved successfully ✅")
    } catch (error) {
      alert("Error saving design ❌")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Customize Your Jersey
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Controls */}
        <div className="bg-white p-6 rounded shadow">

          {/* View Toggle */}
          <div className="flex mb-6">
            <button
              onClick={() => setView("front")}
              className={`flex-1 py-2 ${
                view === "front"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Front
            </button>

            <button
              onClick={() => setView("back")}
              className={`flex-1 py-2 ${
                view === "back"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Back
            </button>
          </div>

          {/* Jersey Color */}
          <label className="block mb-4">
            <span className="font-semibold">Jersey Color</span>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="block mt-2 w-full h-10"
            />
          </label>

          {/* Logo Upload (Front only) */}
          {view === "front" && (
            <label className="block mb-4">
              <span className="font-semibold">Upload Logo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="block mt-2"
              />
            </label>
          )}

          {/* Back Controls */}
          {view === "back" && (
            <>
              <label className="block mb-4">
                <span className="font-semibold">Player Name</span>
                <input
                  type="text"
                  maxLength={12}
                  className="w-full mt-2 p-2 border rounded"
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                />
              </label>

              <label className="block mb-6">
                <span className="font-semibold">Jersey Number</span>
                <input
                  type="number"
                  min={0}
                  max={99}
                  className="w-full mt-2 p-2 border rounded"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </label>
            </>
          )}

          {/* Save Button */}
          <button
            onClick={saveDesign}
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Design"}
          </button>
        </div>

        {/* Preview */}
        <JerseyPreview
          color={color}
          name={name}
          number={number}
          view={view}
          logo={logo}
        />
      </div>
    </div>
  )
}
