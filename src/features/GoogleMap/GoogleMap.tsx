import { useState, useCallback, useMemo, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import styles from './GoogleMap.module.scss'

const center = {
  lat: 50.43917412804731,
  lng: 30.517174253281798,
}

const markerPosition = {
  lat: 50.43917412804731,
  lng: 30.517174253281798,
}

function MapLocation() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC01O1qjTRo0p8N00VaXSZLafTODpCxer8',
  })

  const [map, setMap] = useState(null)
  const [zoom, setZoom] = useState(17)

  const onLoad = useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      options={{
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      }}
      mapContainerClassName={styles.map}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={markerPosition} icon="/images/icons/marker.svg" />
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default memo(MapLocation)
