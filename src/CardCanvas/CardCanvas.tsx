/** @format */

import React, { useEffect, useRef } from "react";
import { CardValues } from "../App";
import classes from "./CardCanvas.module.scss";

interface Props {
  values: CardValues;
}

// draw round rectangle
function roundRect(
  ctx: CanvasRenderingContext2D,
  opts: {
    x: number;
    y: number;
    width: number;
    height: number;
    radius?: number | { tl: number; tr: number; br: number; bl: number };
    stroke?: boolean;
    fill?: boolean;
  }
) {
  if (typeof opts.stroke === "undefined") {
    opts.stroke = true;
  }
  if (typeof opts.radius === "undefined") {
    opts.radius = 5;
  }
  if (typeof opts.radius === "number") {
    opts.radius = {
      tl: opts.radius,
      tr: opts.radius,
      br: opts.radius,
      bl: opts.radius,
    };
  }
  ctx.beginPath();
  ctx.moveTo(opts.x + opts.radius.tl, opts.y);
  ctx.lineTo(opts.x + opts.width - opts.radius.tr, opts.y);
  ctx.quadraticCurveTo(
    opts.x + opts.width,
    opts.y,
    opts.x + opts.width,
    opts.y + opts.radius.tr
  );
  ctx.lineTo(opts.x + opts.width, opts.y + opts.height - opts.radius.br);
  ctx.quadraticCurveTo(
    opts.x + opts.width,
    opts.y + opts.height,
    opts.x + opts.width - opts.radius.br,
    opts.y + opts.height
  );
  ctx.lineTo(opts.x + opts.radius.bl, opts.y + opts.height);
  ctx.quadraticCurveTo(
    opts.x,
    opts.y + opts.height,
    opts.x,
    opts.y + opts.height - opts.radius.bl
  );
  ctx.lineTo(opts.x, opts.y + opts.radius.tl);
  ctx.quadraticCurveTo(opts.x, opts.y, opts.x + opts.radius.tl, opts.y);
  ctx.closePath();
  if (opts.fill) {
    ctx.fill();
  }
  if (opts.stroke) {
    ctx.stroke();
  }
}

const CardCanvas: React.FC<Props> = ({ values }) => {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;

    return canvas.getContext("2d");
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();

    ctx.clearRect(0, 0, 200, 300);

    // background(transparent)
    ctx.fillStyle = "rgba(128,255,128, 0)";
    ctx.fillRect(0, 0, 200, 300);

    // outline
    ctx.strokeStyle = "black";
    ctx.fillStyle = values.bgcolor;
    roundRect(ctx, {
      x: 0,
      y: 0,
      width: 200,
      height: 300,
      radius: 20,
      fill: true,
      stroke: true,
    });

    // point
    if (values.point && values.point.length > 0) {
      ctx.strokeStyle = "black";
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(30, 30, 20, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.font = "1.5rem 'Sawarabi Gothic'";
      ctx.fillStyle = "black";
      ctx.fillText(values.point, 30, 38, 30);
    }

    // title
    ctx.textAlign = "center";
    ctx.font = "2rem 'Sawarabi Gothic'";
    ctx.fillStyle = "black";
    ctx.fillText(values.title, 100, 80, 190);

    // text
    const fontSize = 14;
    ctx.textAlign = "left";
    ctx.font = `${fontSize}px 'Sawarabi Gothic'`;
    ctx.fillStyle = "black";
    values.text.split("\n").forEach((line, i) => {
      ctx.fillText(line, 10, 130 + i * fontSize + i * 2, 180);
    });

    ctx.save();
  });

  const doDownload = () => {
    const canvas: any = canvasRef.current;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png", 0.85);
    a.download = `${values.title.length > 0 ? values.title : "image"}.png`;
    a.click();
  };

  return (
    <div className={classes.CardCanvasContainer}>
      <canvas ref={canvasRef} width="200" height="300" />
      <p>
        <button onClick={doDownload}>ダウンロード</button>
      </p>
    </div>
  );
};

export default CardCanvas;
