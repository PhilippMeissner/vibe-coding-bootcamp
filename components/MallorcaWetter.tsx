"use client";

import { useEffect, useState } from "react";

/** Palma de Mallorca */
const LAT = 39.5696;
const LON = 2.6502;

const API =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m" +
  "&daily=temperature_2m_max,temperature_2m_min" +
  "&forecast_days=1&timezone=Europe%2FMadrid";

type Wetter = {
  temp: number;
  gefuehlt: number;
  code: number;
  wind: number;
  max: number;
  min: number;
};

/** WMO-Wettercodes, wie Open-Meteo sie liefert. */
const CODES: Record<number, { text: string; icon: string }> = {
  0: { text: "Klar", icon: "☀️" },
  1: { text: "Überwiegend klar", icon: "🌤️" },
  2: { text: "Teils bewölkt", icon: "⛅" },
  3: { text: "Bedeckt", icon: "☁️" },
  45: { text: "Nebel", icon: "🌫️" },
  48: { text: "Reifnebel", icon: "🌫️" },
  51: { text: "Leichter Nieselregen", icon: "🌦️" },
  53: { text: "Nieselregen", icon: "🌦️" },
  55: { text: "Starker Nieselregen", icon: "🌧️" },
  61: { text: "Leichter Regen", icon: "🌦️" },
  63: { text: "Regen", icon: "🌧️" },
  65: { text: "Starker Regen", icon: "🌧️" },
  71: { text: "Leichter Schneefall", icon: "🌨️" },
  73: { text: "Schneefall", icon: "🌨️" },
  75: { text: "Starker Schneefall", icon: "❄️" },
  80: { text: "Leichte Schauer", icon: "🌦️" },
  81: { text: "Schauer", icon: "🌧️" },
  82: { text: "Kräftige Schauer", icon: "⛈️" },
  95: { text: "Gewitter", icon: "⛈️" },
  96: { text: "Gewitter mit Hagel", icon: "⛈️" },
  99: { text: "Schweres Gewitter", icon: "⛈️" },
};

function beschreibe(code: number) {
  return CODES[code] ?? { text: "Wetter unbekannt", icon: "🌡️" };
}

export default function MallorcaWetter() {
  const [wetter, setWetter] = useState<Wetter | null>(null);
  const [fehler, setFehler] = useState(false);

  useEffect(() => {
    let abgebrochen = false;

    async function laden() {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const daten = await res.json();
        if (abgebrochen) return;

        setWetter({
          temp: Math.round(daten.current.temperature_2m),
          gefuehlt: Math.round(daten.current.apparent_temperature),
          code: daten.current.weather_code,
          wind: Math.round(daten.current.wind_speed_10m),
          max: Math.round(daten.daily.temperature_2m_max[0]),
          min: Math.round(daten.daily.temperature_2m_min[0]),
        });
        setFehler(false);
      } catch {
        if (!abgebrochen) setFehler(true);
      }
    }

    laden();
    // Alle 10 Minuten aktualisieren
    const timer = setInterval(laden, 10 * 60 * 1000);

    return () => {
      abgebrochen = true;
      clearInterval(timer);
    };
  }, []);

  const rahmen =
    "max-w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 backdrop-blur-md text-white shadow-lg shadow-black/20";

  if (fehler) {
    return (
      <div className={`${rahmen} text-sm text-white/70`}>
        Wetterdaten gerade nicht verfügbar
      </div>
    );
  }

  if (!wetter) {
    return (
      <div className={`${rahmen} text-sm text-white/70`}>
        <span className="inline-block animate-pulse">Wetter wird geladen …</span>
      </div>
    );
  }

  const { text, icon } = beschreibe(wetter.code);

  return (
    <div className={rahmen}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
        Palma de Mallorca
      </p>

      <div className="mt-2 flex items-center gap-3">
        <span className="text-4xl leading-none" aria-hidden="true">
          {icon}
        </span>
        <div>
          <p className="text-3xl font-bold leading-none tabular-nums">
            {wetter.temp}
            <span className="align-top text-lg">°C</span>
          </p>
          <p className="mt-1 text-sm text-white/80">{text}</p>
        </div>
      </div>

      <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-white/20 pt-2.5 text-xs text-white/75">
        <div>
          <dt className="sr-only">Höchst- und Tiefstwert</dt>
          <dd className="tabular-nums">
            ↑ {wetter.max}° &nbsp; ↓ {wetter.min}°
          </dd>
        </div>
        <div>
          <dt className="sr-only">Gefühlt</dt>
          <dd className="tabular-nums">Gefühlt {wetter.gefuehlt}°</dd>
        </div>
        <div>
          <dt className="sr-only">Wind</dt>
          <dd className="tabular-nums">{wetter.wind} km/h</dd>
        </div>
      </dl>
    </div>
  );
}
