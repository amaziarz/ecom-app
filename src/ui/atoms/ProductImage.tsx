interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="aspect-square overflow-hidden rounded shadow-lg">
      <img
        className="h-full w-full object-contain object-center"
        src={src}
        alt={alt}
      />
    </div>
  );
}
