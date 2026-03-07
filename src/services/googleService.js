export function searchNearbyGyms(map, location) {
  const service = new google.maps.places.PlacesService(map)

  const request = {
    location,
    radius: 3000,
    type: "gym"
  }

  return new Promise((resolve, reject) => {
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(results)
      } else {
        reject(status)
      }
    })
  })
}