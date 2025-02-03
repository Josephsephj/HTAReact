function About() {
  return (
    <div>
      <section id="about" className="about p-8">
        <h1 className="text-crimson text-3xl font-bold mb-6">About Us</h1>
        <div className="flex gap-4">
          {/* <img src={aboutImage} alt="About Us" className="w-1/3 rounded-lg" /> */}
          <p className="text-gray-700">
            The Earth Environment And Climate Care Ambassador (EECCA) is a
            registered Independent Non-Governmental Organization established
            since 2016. The organization passionately addresses the impacts of
            climate change and environmental crises across Africa and other
            parts of the world. EECCA is registered with the Corporate Affairs
            Commission (CAC) Nigeria as a Non-Profit Organization, in the United
            Kingdom as a limited liability NGO, and is processing its
            international registration in Liberia with the Ministry of Foreign
            Affairs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
