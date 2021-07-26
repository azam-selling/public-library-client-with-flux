export async function handleResponse(response) {
  if (response.status !== 204) {
    if (response.ok) return response.json();

    if (response.status === 400) {
      const error = await response.text();
      throw new Error(error);
    }

    throw new Error("Newwork response was not OK.");
  }
}

export function handleError(error) {
  console.log(error);
  throw error;
}
