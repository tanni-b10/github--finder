function Footer() {
    const footerYear= new Date().getFullYear()

  return (
    <div className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>

        </div>

    <p>Copyright &copy; {footerYear} All rights reserved</p>
    </div>
  );
}

export default Footer;
