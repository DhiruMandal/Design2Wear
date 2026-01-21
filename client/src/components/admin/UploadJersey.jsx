import { useState } from "react"
import AdminLayout from "./AdminLayout"
import API from "../../services/api"

export default function UploadJersey() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [front, setFront] = useState(null)
  const [back, setBack] = useState(null)
  const [previewFront, setPreviewFront] = useState(null)
  const [previewBack, setPreviewBack] = useState(null)

  const handleImage = (file, setImage, setPreview) => {
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!front || !back) {
      alert("Both images required")
      return
    }

    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("frontImage", front)
    formData.append("backImage", back)

    try {
      await API.post("/products", formData)
      alert("Jersey uploaded successfully")
      setName("")
      setPrice("")
      setFront(null)
      setBack(null)
      setPreviewFront(null)
      setPreviewBack(null)
    } catch (err) {
      alert("Upload failed")
    }
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Upload Jersey Design</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-3xl"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1">Jersey Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Base Price</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="font-semibold block mb-2">Front Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImage(e.target.files[0], setFront, setPreviewFront)
              }
            />
            {previewFront && (
              <img
                src={previewFront}
                className="mt-2 h-40 object-contain border"
              />
            )}
          </div>

          <div>
            <label className="font-semibold block mb-2">Back Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImage(e.target.files[0], setBack, setPreviewBack)
              }
            />
            {previewBack && (
              <img
                src={previewBack}
                className="mt-2 h-40 object-contain border"
              />
            )}
          </div>
        </div>

        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
          Upload Jersey
        </button>
      </form>
    </AdminLayout>
  )
}
