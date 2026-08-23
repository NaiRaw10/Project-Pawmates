"use client";

import { useEffect, useState } from "react";
import DriftWall from "./DriftWall";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(2);
      } else if (window.innerWidth < 768) {
        setColumns(3);
      } else if (window.innerWidth < 1024) {
        setColumns(4);
      } else {
        setColumns(5);
      }
    };

    updateColumns();

    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/photos"
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error("Gagal mengambil data foto.");
        }

        setPhotos(result.data);
      } catch (error) {
        console.error("Gagal mengambil foto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-cream py-24"
    >
      <div className="mx-auto px-6 text-center">
        <span className="text-xs font-bold text-maroon">
          GALERI
        </span>

        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight text-brown">
          Wajah-wajah bahagia dari komunitas kami
        </h2>
      </div>

      <div className="mt-12 h-150 w-full overflow-hidden">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-brown">
              Memuat galeri...
            </p>
          </div>
        ) : (
          <DriftWall
            items={photos.map((photo) => ({
              image: photo.image_url,
              title: photo.title,
            }))}
            columns={columns}
            tileWidth={240}
            tileHeight={160}
            gap={14}
            speed={35}
            tilt={10}
            turn={-8}
            perspective={1200}
            radius={16}
          />
        )}
      </div>
    </section>
  );
}