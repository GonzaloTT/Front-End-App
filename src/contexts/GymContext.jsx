import { createContext, useState } from "react"

export const GymContext = createContext()

export function GymProvider({ children }) {

  const [gyms, setGyms] = useState([])
  const [selectedGym, setSelectedGym] = useState(null)
  const [map, setMap] = useState(null)

  return (
    <GymContext.Provider
      value={{
        gyms,
        setGyms,
        selectedGym,
        setSelectedGym,
        map,
        setMap
      }}
    >
      {children}
    </GymContext.Provider>
  )
}