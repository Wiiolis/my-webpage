import './header.scss';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_bg" />
        <div className="header_text">
          <span className="animation_slide">
            <h1 className="header_text_hello">Hello</h1>
          </span>
          <span className="animation_slide">
            <p>You just visited my page and if you have no idea what is it about,</p>
          </span>
          <h1 className="header_text_codeArt line__1">
            I do <span className="header_text_code">code</span> and{' '}
            <span className="header_text_art">art</span>
          </h1>
          <span className="animation_slide">
            <p>
              and cooking, reading books and petting my dog, but I don't think you are interested in
              this.
            </p>
          </span>
        </div>

        <div className="header_buttons">
          <div class="header_buttons_code">
            <a href="#">Code</a>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
              </svg>
            </div>
          </div>

          <div class="header_buttons_art">
            <a href="#">Art</a>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="header_links">
          <div className="header_links_line" />
          <span>
            <div className="header_links_link">
              <div className="gate-left" />
              <div className="gate-right" />
              <div className="linkedin" />
            </div>

            <div className="header_links_link">
              <div className="gate-left" />
              <div className="gate-right" />
              <div className="artstation" />
            </div>

            <div className="header_links_link">
              <div className="gate-left" />
              <div className="gate-right" />
              <div className="twitter" />
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
