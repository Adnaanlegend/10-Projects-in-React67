"use client";


import { ImageGrid } from "@/components/ui/image-grid";

import { CloudinaryImage } from "@/components/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";


export default function AlbumGrid({ images }: { images: SearchResult[] }) {
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
