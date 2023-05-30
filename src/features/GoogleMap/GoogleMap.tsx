import { useState, useCallback, useMemo, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import styles from './GoogleMap.module.scss'

const center = {
  lat: 50.44935569771669,
  lng: 30.52710439794528,
}

const markerPosition = {
  lat: 50.44935569771669,
  lng: 30.52710439794528,
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
