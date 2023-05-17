import './contact.scss';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact me</h1>
      <form>
        <div>
          <input placeholder="email" type="email" />
          <input type="submit" value="Send" />
        </div>
        <textarea placeholder="your message" rows="8" />
      </form>
    </div>
  );
}

export default Contact;
