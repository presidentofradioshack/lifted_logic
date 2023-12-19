import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useMemo } from "react";

import mapStyles from "@/app/data/mapStyle.json";

const Map = () => {
	const center = useMemo(() => ({ lat: 38.987956850558795, lng: -94.66831177477052 }), []);

	return (
		<GoogleMap
			mapContainerStyle={{ width: "100%", height: "544px" }}
			center={center}
			zoom={15}
			options={{
				zoomControl: false,
				mapTypeControl: false,
				fullscreenControl: false,
				streetViewControl: false,
				styles: mapStyles,
				clickableIcons: false,
			}}
		>
			<Marker position={center} />
		</GoogleMap>
	);
};

export default Map;
