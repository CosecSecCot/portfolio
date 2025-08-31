"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function GradientBackground({
  color1 = "#888888",
  color2 = "#FFFFFF",
  color3 = "#F0F0F0",
}: {
  color1?: string;
  color2?: string;
  color3?: string;
}) {
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: 0,
        zIndex: -1,
      }}
      pointerEvents="none"
      lazyLoad={false}
    >
      <ShaderGradient
        // control="query"
        // urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false"
        animate="on"
        type="waterPlane"
        color1={color1}
        color2={color2}
        color3={color3}
        grain="off"
        envPreset="city"
        uSpeed={0.3}
        cDistance={2.9}
      />
    </ShaderGradientCanvas>
  );
}
