import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type CountryMarker = {
    name: string;
    lat: number;
    lng: number;
    code: string; // ISO 3166-1 alpha-2
};

const COUNTRIES: CountryMarker[] = [
    { name: "Cambodia", lat: 11.5564, lng: 104.9282, code: "kh" },
    { name: "Thailand", lat: 13.7563, lng: 100.5018, code: "th" },
    { name: "Vietnam", lat: 21.0278, lng: 105.8342, code: "vn" },
    { name: "Laos", lat: 17.9757, lng: 102.6331, code: "la" },
    { name: "Malaysia", lat: 3.139, lng: 101.6869, code: "my" },
    { name: "Singapore", lat: 1.3521, lng: 103.8198, code: "sg" },
    { name: "Indonesia", lat: -6.2088, lng: 106.8456, code: "id" },
    { name: "Philippines", lat: 14.5995, lng: 120.9842, code: "ph" },
];

function flagIcon(code: string) {
    const url = `https://flagcdn.com/w80/${code.toLowerCase()}.png`;

    // NOTE: Tailwind classes won't work inside Leaflet divIcon HTML,
    // so we keep minimal inline styles ONLY inside the icon HTML.
    return L.divIcon({
        className: "leaflet-flag-icon",
        html: `
      <div style="
        width:44px;height:44px;border-radius:9999px;
        background:#fff; display:flex; align-items:center; justify-content:center;
        box-shadow:0 8px 18px rgba(0,0,0,0.18);
        border:2px solid rgba(255,255,255,0.9);
      ">
        <img src="${url}" alt="${code}" style="width:36px;height:36px;border-radius:9999px;object-fit:cover;" />
      </div>
    `,
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -44],
    });
}

export default function RegionalMap() {
    const center: [number, number] = [10, 105];

    const icons = useMemo(() => {
        const m = new Map<string, L.DivIcon>();
        for (const c of COUNTRIES) m.set(c.code, flagIcon(c.code));
        return m;
    }, []);

    return (
        <div className="max-w-6xl bg-gray-100 p-3 rounded-xl mx-auto">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                {/* Map area */}
                <div className="h-[520px] w-full">
                    <MapContainer
                        center={center}
                        zoom={5}
                        zoomControl={false}
                        scrollWheelZoom
                        className="h-full w-full"
                    >
                        <ZoomControl position="topleft" />

                        <TileLayer
                            attribution='&copy; OpenStreetMap contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {COUNTRIES.map((c) => (
                            <Marker
                                key={c.code}
                                position={[c.lat, c.lng]}
                                icon={icons.get(c.code)!}
                            >
                                <Popup>
                                    <div className="min-w-[180px]">
                                        <div className="text-sm font-semibold text-slate-900">{c.name}</div>
                                        <div className="mt-1 text-xs text-slate-600">
                                            {c.lat.toFixed(4)}, {c.lng.toFixed(4)}
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>

            {/* Optional caption */}
            <div className="mt-3 text-center text-xs text-slate-500">
                Click a flag to view details
            </div>
        </div>
    );
}