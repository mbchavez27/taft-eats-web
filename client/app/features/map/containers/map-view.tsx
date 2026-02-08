import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { landmarks } from '../data/landmarks'

const greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function DLSUMap() {
  const DLSU_COORDS: [number, number] = [14.5648, 120.9932]

  return (
    <MapContainer
      center={DLSU_COORDS}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: '750px', width: '100%' }}
    >
      <TileLayer
        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
      />

      {landmarks.map((landmark, index) => (
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
