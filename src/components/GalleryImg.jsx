function GalleryImg({ src, caption }) {
  return (
    <div className="gallery-img">
      <img src={src} />
      <p className="gallery-caption">{caption}</p>
    </div>
  );
}

export default GalleryImg;
