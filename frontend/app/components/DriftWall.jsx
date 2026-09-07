"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./DriftWall.css";

export default function DriftWall({
    items = [],
    columns = 5,
    tileWidth = 190,
    tileHeight = 135,
    gap = 18,
    speed = 35,
    tilt = 10,
    turn = -8,
    perspective = 1200,
    radius = 16,
}) {
    const containerRef = useRef(null);
    const planeRef = useRef(null);
    const trackRefs = useRef([]);
    const animationRef = useRef(null);

    const offsetsRef = useRef([]);
    const lastTimeRef = useRef(null);

    const [containerHeight, setContainerHeight] = useState(600);

    const columnItems = useMemo(() => {
        if (!items.length) return [];

    const columnsData = Array.from(
      { length: columns },
      () => []
    );

    items.forEach((item, index) => {
      columnsData[index % columns].push(item);
    });

    return columnsData;
  }, [items, columns]);

  const columnMeta = useMemo(() => {
    const unitHeight = tileHeight + gap;

    return columnItems.map((column) => {
      const copyHeight = Math.max(
        unitHeight,
        column.length * unitHeight
      );

      const copies = Math.max(
        3,
        Math.ceil((containerHeight * 2) / copyHeight) + 2
      );

      return {
        copyHeight,
        copies,
      };
    });
  }, [
    columnItems,
    tileHeight,
    gap,
    containerHeight,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerHeight(
        entry.contentRect.height || 600
      );
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    offsetsRef.current = columnMeta.map((meta, index) => {
      return meta.copyHeight * ((index * 0.23) % 1);
    });
  }, [columnMeta]);

  useEffect(() => {
    if (!columnItems.length) return;

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const deltaTime = Math.min(
        0.05,
        Math.max(
          0,
          timestamp - lastTimeRef.current
        ) / 1000
      );

      lastTimeRef.current = timestamp;

      columnMeta.forEach((meta, index) => {
        const direction =
          index % 2 === 0 ? 1 : -1;

        let next =
          (offsetsRef.current[index] || 0) +
          speed *
            direction *
            deltaTime;

        next =
          ((next % meta.copyHeight) +
            meta.copyHeight) %
          meta.copyHeight;

        offsetsRef.current[index] = next;

        const track = trackRefs.current[index];

        if (track) {
          track.style.transform = `translate3d(0, ${-next}px, 0)`;
        }
      });

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = null;
      lastTimeRef.current = null;
    };
  }, [
    columnItems,
    columnMeta,
    speed,
  ]);

  useEffect(() => {
    if (!planeRef.current) return;

    planeRef.current.style.transform = `
      translate(-50%, -50%)
      scale(1.15)
      rotateX(${tilt}deg)
      rotateY(${turn}deg)
      translateZ(-80px)
    `;
  }, [tilt, turn]);

  if (!items.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="drift-wall"
      style={{
        "--dw-tile-width": `${tileWidth}px`,
        "--dw-tile-height": `${tileHeight}px`,
        "--dw-gap": `${gap}px`,
        "--dw-radius": `${radius}px`,
        "--dw-perspective": `${perspective}px`,
      }}
    >
      <div
        ref={planeRef}
        className="drift-wall__plane"
      >
        {columnItems.map((column, columnIndex) => {
          const meta =
            columnMeta[columnIndex];

          const copies = Array.from({
            length: meta.copies,
          });

          return (
            <div
              className="drift-wall__column"
              key={`column-${columnIndex}`}
            >
              <div
                className="drift-wall__track"
                ref={(element) => {
                  trackRefs.current[columnIndex] =
                    element;
                }}
              >
                {copies.map((_, copyIndex) =>
                  column.map((item, itemIndex) => (
                    <div
                      className="drift-wall__tile"
                      key={`${columnIndex}-${copyIndex}-${itemIndex}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title || "Foto Pawmatess"}
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}