import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Custom green marker icon
const greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// CORRECTED DLSU Manila campus landmarks
const landmarks = [
  {
    name: 'Gokongwei Building',
    coords: [14.5635, 120.9935], // Corrected
  },
  {
    name: 'Henry Sy Sr. Hall',
    coords: [14.5642, 120.9936], // Corrected
  },
  {
    name: 'Green Residences',
    coords: [14.5662, 120.9927], // Corrected
  },
  {
    name: 'De La Salle University Main Gate (North)',
    coords: [14.5653, 120.9932], // Corrected
  },
]

export default function DLSUMap() {
  // Corrected center point for DLSU
  const DLSU_COORDS: [number, number] = [14.5648, 120.9932]

  return (
    <MapContainer
      center={DLSU_COORDS}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: '750px', width: '100%' }}
    >
      {/* Minimal tiles */}
      <TileLayer
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
      />

      {/* Render all landmarks */}
      {landmarks.map((landmark, index) => (
        // Added index to key to prevent duplicates issues
        <Marker
          key={`${landmark.name}-${index}`}
          position={landmark.coords as [number, number]}
          icon={greenIcon}
        >
          <Popup>{landmark.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
