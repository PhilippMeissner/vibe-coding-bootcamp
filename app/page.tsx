"use client";

import { useEffect, useState } from "react";

// Track-ID aus der Spotify-URL: .../track/68Wrmobntys0DWyV4gBiUR
const SPOTIFY_TRACK_ID = "68Wrmobntys0DWyV4gBiUR";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO ?? "";
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;

  const [typed, setTyped] = useState("");

  // Tipp-Effekt: Buchstabe für Buchstabe
  useEffect(() => {
    if (!motto) return;
    setTyped("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(motto.slice(0, i));
      if (i >= motto.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, [motto]);

  return (
    <main className="retro-main">
      <div className="scanlines" aria-hidden />

      <div className="retro-content">
        {motto ? (
          <div className="motto-wrap">
            <div className="accent-bar" />
            <p className="motto-text">
              &bdquo;{typed}
              <span className="cursor">&#9608;</span>&ldquo;
            </p>
            <div className="accent-bar" />
          </div>
        ) : (
          <div className="motto-wrap">
            <h1 className="motto-text accent-gold">Hallo Du</h1>
            <p className="subtitle">Willkommen beim Kurs</p>
          </div>
        )}

        <div className="spotify-wrap">
          <iframe
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>

      {adresse && (
        <footer className="retro-footer">
          <p className="footer-label">// Impressum</p>
          <p className="footer-address">{adresse}</p>
        </footer>
      )}
    </main>
  );
}
