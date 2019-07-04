import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerLinksContainer">
          <a href="https://www.atu.de/pages/unternehmen.html" target="_blank" rel="noopener noreferrer">Über uns</a>
          <a href="https://karriere.atu.de/start" target="_blank" rel="noopener noreferrer">Karriere</a>
          <a href="https://www.atu.de/pages/unternehmen/presse.html" target="_blank" rel="noopener noreferrer">Presse</a>
          <a href="https://www.atu.de/pages/common/impressum.html" target="_blank" rel="noopener noreferrer">Impressum</a>
          <a href="https://www.atu.de/datenschutz/" target="_blank" rel="noopener noreferrer">Datenschutz</a>
        </div>
      </div>
    );
  }
}

export default Footer;