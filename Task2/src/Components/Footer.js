import "./Footer.css";

function Footer() {
  return (
    <div>

    <div className="footer">
      <div className="footer-content">
          <h3 className="contact">Contact Information</h3>
        <div className="contact-info">
          <p>
            <strong>Email:</strong> example@email.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
        </div>
      </div>
    </div>
      <div className="rights">
        <p>&copy; 2023 Haseeb. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
