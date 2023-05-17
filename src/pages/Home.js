import Header from '../components/header/header';
import Code from '../components/code/code';
import Art from '../components/art/art';
import About from '../components/about/about';
import Contact from '../components/contact/contact';

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Code />
      <Art />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
