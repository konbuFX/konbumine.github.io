"use strict"

class Block {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.build();
  }

  build() {
    // TODO: build the block
  }

  createFace(type, x, y, z, rx, ry, rz) {
    // TODO: return a block face
  }

  createTexture(type) {
    // TODO: get the texture
  }
}
createFace(type, x, y, z, rx, ry, rz) {
  return $(`<div class="side side-${type}" />`)
    .css({
      transform: `
        translateX(${x}px)
        translateY(${y}px)
        translateZ(${z}px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        rotateZ(${rz}deg)
      `,
      background: this.createTexture(type)
    });
}

createTexture(type) {
  return `rgba(100, 100, 255, 0.2)`;
}
build() {
  const size = 64;
  const x = this.x * size;
  const y = this.y * size;
  const z = this.z * size;

  const block = this.block = $(`<div class="block" />`)
    .css({
      transform: `
        translateX(${x}px)
        translateY(${y}px)
        translateZ(${z}px)
      `
    });

  $(`<div class="x-axis" />`)
    .appendTo(block)
    .css({
      transform: `
        rotateX(90deg)
        rotateY(0deg)
        rotateZ(0deg)
      `
    });

  $(`<div class="y-axis" />`)
    .appendTo(block)
    .css({
      transform: `
        rotateX(0deg)
        rotateY(90deg)
        rotateZ(0deg)
      `
    });

  $(`<div class="z-axis" />`)
    .appendTo(block);
}
