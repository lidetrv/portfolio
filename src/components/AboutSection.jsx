const AboutSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="C:/Users/Administrator/Documents/portfolio/src/assets/lide photo.jpg" // Updated image source
          alt="About Me"
          className="w-32 h-32 rounded-full shadow-lg ring-4 ring-blue-500"
        />
        <p className="text-gray-700 mt-4 text-center text-lg leading-relaxed max-w-xl">
          My name is [Your Name], and I am a passionate developer and graphic
          designer. I specialize in creating visually appealing and functional
          web applications that enhance user experience. With a strong
          background in both front-end development and graphic design, I enjoy
          blending aesthetics with technology. My enthusiasm for learning new
          trends in design and coding keeps me motivated to push creative
          boundaries. I believe in the power of collaboration and often seek
          opportunities to work with talented individuals on innovative
          projects. In my free time, I love exploring new design tools and
          contributing to open-source projects.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;