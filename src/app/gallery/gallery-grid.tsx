"use client";


import { ImageGrid } from "@/components/ui/image-grid";
import { SearchResult } from "./page";
import { CloudinaryImage } from "@/components/cloudinary-image";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="500"
            height="300"
            alt="An image of something"
          />
        );
      }}
    />
  );
}
