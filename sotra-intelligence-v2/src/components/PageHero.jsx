function PageHero({ tag, title, description }) {
  return (
    <section className="page-hero">

      <span className="page-tag">
        {tag}
      </span>

      <h1>
        {title}
      </h1>

      <p>
        {description}
      </p>

    </section>
  );
}

export default PageHero;