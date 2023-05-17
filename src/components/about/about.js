import './about.scss';

function About() {
  return (
    <div className="about">
      <h1>
        About <span>me</span>
      </h1>
      <p className="about_text">
        When I first learned about HTML/CSS in <b>2016</b>, I was fascinated by the whole new world
        that opened up to me. Since then, I have been <b>creating webpages</b> and experimenting
        with different programming languages. In 2018, I began working as a{' '}
        <b>full-time front-end</b> developer for a company that primarily used <b>Vue.js</b>.
        Throughout my journey, I have explored a wide range of new technologies and techniques, some
        of which I have continued to use extensively, while others I have only dabbled in. I have
        also gained experience with <b>UI/UX</b> elements, designing a few pages for fun (such as
        the one found here), and keeping an eye out for the latest trends in web design.
      </p>
      <div className="divider" />
    </div>
  );
}

export default About;
