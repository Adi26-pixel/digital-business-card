function Info() {
  return (
    <div className="Info">
      <img className="Info-profile" src="../assets/Adeline-Monsengo.JPG" />
      <h1 className="Info-name">Adeline Monsengo</h1>
      <h3 className="Info-occupation">Web Developer</h3>
      <a className="Info-link" href="https://adelinemonsengo.com">
        adelinemonsengo.com
      </a>
      <div className="Info-buttonContainer">
        <a className="Info-emailButton">
          <img src="../assets/Mail-Icon.png" />
          <span>Email</span>
        </a>
        <a className="Info-linkedInButton">
          <img src="../assets/LinkedIn-Icon.png" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Info;
