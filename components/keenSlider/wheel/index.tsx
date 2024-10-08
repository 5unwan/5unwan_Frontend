"use client";

import { use, useEffect, useRef, useState } from "react";
import "./style.css";

import {
  KeenSliderOptions,
  TrackDetails,
  useKeenSlider,
} from "keen-slider/react";

interface WheelProps {
  initIdx?: number;
  label?: string;
  length: number;
  loop?: boolean;
  perspective: "left" | "right" | "center";
  setValue?: (
    relative: number,
    absolute: number,
    selectedDate: number,
  ) => string;
  width: number;
}

export default function Wheel({
  initIdx,
  label,
  length,
  loop,
  perspective,
  setValue,
  width,
}: WheelProps) {
  const wheelSize = 20;
  const slides = length;
  const slideDegree = 360 / wheelSize;
  const slidesPerView = loop ? 9 : 1;
  const [sliderState, setSliderState] = useState<TrackDetails | null>(null);
  const size = useRef(0);
  const options = useRef<KeenSliderOptions>({
    slides: {
      number: slides,
      origin: loop ? "center" : "auto",
      perView: slidesPerView,
    },
    vertical: true,
    initial: initIdx || 0,
    loop: loop,
    dragSpeed: (val) => {
      const height = size.current;
      return (
        val *
        (height /
          ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
          slidesPerView)
      );
    },
    created: (s) => {
      size.current = s.size;
    },
    updated: (s) => {
      size.current = s.size;
    },
    detailsChanged: (s) => {
      setSliderState(s.track.details);
    },
    rubberband: !loop,
    mode: "free-snap",
  });

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(options.current);

  const [radius, setRadius] = useState(0);

  useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2);
  }, [slider]);

  const slideValues = () => {
    if (!sliderState) return [];
    const offset = loop ? 1 / 2 - 1 / slidesPerView / 2 : 0;

    const values = [];
    for (let i = 0; i < slides; i++) {
      const distance = sliderState
        ? (sliderState.slides[i].distance - offset) * slidesPerView
        : 0;
      const rotate =
        Math.abs(distance) > wheelSize / 2
          ? 180
          : distance * (360 / wheelSize) * -1;
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      };

      const adjustedDistance = Math.round(distance);
      const absoluteValue =
        (((sliderState.rel + adjustedDistance) % length) + length) % length;

      const value = setValue ? setValue(i, absoluteValue, sliderState.rel) : i;
      values.push({ style, value });
    }
    return values;
  };

  return (
    <div
      className={"wheel keen-slider wheel--perspective-" + perspective}
      ref={sliderRef}
    >
      <div
        className="wheel__shadow-top"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
      <div className="wheel__inner">
        <div className="wheel__slides" style={{ width: width + "px" }}>
          {slideValues().map(({ style, value }, idx) => (
            <div className="wheel__slide" style={style} key={idx}>
              <span>{value}</span>
            </div>
          ))}
        </div>
        {label && (
          <div
            className="wheel__label"
            style={{
              transform: `translateZ(${radius}px)`,
              WebkitTransform: `translateZ(${radius}px)`,
            }}
          >
            {label}
          </div>
        )}
      </div>
      <div
        className="wheel__shadow-bottom"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
    </div>
  );
}
