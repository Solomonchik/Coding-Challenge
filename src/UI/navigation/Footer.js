import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerLinksContainer">
          <Link to="https://www.atu.de/pages/unternehmen.html" target="_blank">Über uns</Link>
          <Link to="https://karriere.atu.de/start" target="_blank">Karriere</Link>
          <Link to="https://www.atu.de/pages/unternehmen/presse.html" target="_blank">Presse</Link>
          <Link to="https://www.atu.de/pages/common/impressum.html" target="_blank">Impressum</Link>
          <Link to="https://www.atu.de/datenschutz/" target="_blank">Datenschutz</Link>
        </div>
      </div>
    );
  }
}

export default Footer;