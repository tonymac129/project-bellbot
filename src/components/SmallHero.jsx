function SmallHero({ description }) {
  return (
    <div className="small-hero">
      {description&&<p className="small-hero-description">{description}</p>}
    </div>
  );
}

export default SmallHero;
