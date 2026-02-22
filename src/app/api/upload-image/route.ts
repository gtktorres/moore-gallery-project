export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://localhost:7093/api/Sellers/ProductCreate", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return await response.json();
}

export async function uploadProfileImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    await fetch("https://localhost:5001/api/account/upload-profile-image", {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
})};