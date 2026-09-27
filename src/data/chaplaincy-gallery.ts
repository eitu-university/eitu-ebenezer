export type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

// Intrinsic sizes of /public/capellania-gallery/*.jpeg. next/image needs them
// to reserve each tile's space in the masonry layout and avoid layout shift.
const dimensions: [number, number][] = [
  [1536, 2048],
  [1204, 1600],
  [1536, 2048],
  [1536, 941],
  [1204, 1600],
  [1204, 1600],
  [1204, 1600],
  [1600, 1204],
  [1015, 1308],
  [1020, 1309],
  [1024, 1536],
  [1808, 1200],
  [1365, 2048],
  [1365, 2048],
  [1365, 2048],
  [2048, 1365],
  [2048, 1365],
  [1365, 2048],
  [2048, 1365],
  [2048, 1365],
  [2048, 1365],
  [1365, 2048],
  [1365, 2048],
  [2048, 1365],
  [1102, 1427],
];

export const chaplaincyGallery: GalleryImage[] = dimensions.map(
  ([width, height], i) => ({
    src: `/capellania-gallery/${i + 1}.jpeg`,
    width,
    height,
  })
);
