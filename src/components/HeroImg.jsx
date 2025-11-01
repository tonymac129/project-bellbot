function HeroImg({ src, caption }) {
  return (
    <div className="hero-img">
      <img src={src} />
      <p className="hero-img-caption">{caption}</p>
    </div>
  );
}

export default HeroImg;
