type PageHeroProps = {
  title: string;
  children?: React.ReactNode;
};

const PageHero = ({ title, children }: PageHeroProps) => {
  return (
    <section className="py-14 md:py-20 bg-primary-fixed/35 border-b-2 border-primary/15">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tighter">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
};

export default PageHero;
