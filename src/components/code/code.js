import './code.scss';

function Code() {
  const x = require.context('../../assets/images/logos', false, /\.(png|jpe?g|svg)$/).keys();
  const images = [];
  x.map((item) => images.push(item.replace('./', '')));

  const jsxImages = images.map((image, i) => (
    <div className={`code_logo_${i + 1} test`}>
      <img src={`assets/images/logos/${image}`} key={i} />
    </div>
  ));

  return (
    <div className="code">
      <h1>
        C<span>O</span>DE
      </h1>
      <p>
        When I first learned about HTML/CSS in <b>2016</b>, I was fascinated by the whole new world
        that opened up to me. Since then, I have been <b>creating webpages</b> and experimenting
        with different programming languages. In 2018, I began working as a{' '}
        <b class="primary-color">full time front-end</b> developer for a company that primarily used{' '}
        <b>Vue.js</b>. Throughout my journey, I have explored a wide range of new technologies and
        techniques, some of which I have continued to use extensively, while others I have only
        dabbled in. I have also gained experience with <b>UI/UX</b> elements, designing a few pages
        for fun (such as the one found here), and keeping an eye out for the latest trends in web
        design.
      </p>

      <div className="code_divider" />

      <div className="code_gallery">{jsxImages.map((image) => image)}</div>
    </div>
  );
}

export default Code;
