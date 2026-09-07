const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPhotos = async () => {
  const response = await fetch(`${API_URL}/api/photos`);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Gagal mengambil data foto."
    );
  }

  return result.data;
};

export const sendContact = async (formData) => {
  const response = await fetch(`${API_URL}/api/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Gagal mengirim pesan."
    );
  }

  return result;
};