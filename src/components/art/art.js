import './art.scss';
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

function Art() {
  return (
    <>
      <div className="art">
        <h1>
          <span>A</span>RT
        </h1>

        <p className="art_text">
          When I first learned about HTML/CSS in <b>2016</b>, I was fascinated by the whole new
          world that opened up to me. Since then, I have been <b>creating webpages</b> and
          experimenting with different programming languages. In 2018, I began working as a{' '}
          <b>full-time front-end</b> developer for a company that primarily used <b>Vue.js</b>.
          Throughout my journey, I have explored a wide range of new technologies and techniques,
          some of which I have continued to use extensively, while others I have only dabbled in. I
          have also gained experience with <b>UI/UX</b> elements, designing a few pages for fun
          (such as the one found here), and keeping an eye out for the latest trends in web design.
        </p>

        <LightGallery elementClassNames="art_gallery" elementHeight="1000px">
          <a href="assets/images/smitko.jpeg">
            <div>Smitko</div>
            <img alt="img1" src="assets/images/gallerySmall/w.jpeg" />
          </a>
          <a href="assets/images/smitko.jpeg">
            <div>Smitko</div>
            <img alt="img1" src="assets/images/gallerySmall/w.jpeg" />
          </a>
          <a href="assets/images/smitko.jpeg">
            <div>Smitko</div>
            <img alt="img1" src="assets/images/gallerySmall/w.jpeg" />
          </a>
          <a href="assets/images/smitko.jpeg">
            <div>Smitko</div>
            <img alt="img1" src="assets/images/gallerySmall/w.jpeg" />
          </a>
          <a href="assets/images/smitko.jpeg">
            <div>Smitko</div>
            <img alt="img1" src="assets/images/gallerySmall/w.jpeg" />
          </a>
          <a href="assets/images/smitko.jpeg">
            <div>Smitko</div>
            <img alt="img1" src="assets/images/gallerySmall/w.jpeg" />
          </a>
        </LightGallery>
      </div>
    </>
  );
}

export default Art;
