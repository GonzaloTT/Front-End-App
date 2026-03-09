export const saveFavoriteGym = async (gym) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          gymId: gym.place_id,
          name: gym.name,
          address: gym.vicinity,
          rating: gym.rating
        })
      }
    )

    if (!response.ok) {
      throw new Error("Error saving favorite gym")
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}