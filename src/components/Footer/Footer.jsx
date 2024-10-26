

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full">
      <div className="absolute top-0 w-full">
        {/* Newsletter Subscription Fieldset */}
        <fieldset className="md:-mt-10 md:w-2/3 mx-auto rounded-xl shadow-xl py-8 bg-gradient-to-r from-pink-200 to-orange-200 text-center">
          <h1 className="text-xl font-bold">Subscribe to our Newsletter</h1>
          <label className="label">
            <span className="label-text my-2 text-black">
              Subscribe to our newsletter for the latest updates.
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered join-item"
            />
            <button className="btn btn-warning join-item">Subscribe</button>
          </div>
        </fieldset>
      </div>

      {/* Main Footer Section */}
      <main className="bg-[#07091a] rounded-xl pt-60 mt-20 text-white text-center">
        <img
          className="mx-auto mb-4"
          src="../../public/image/logo-footer.png"
          alt="Footer Logo"
        />

        {/* Footer Content */}
        <div className="footer p-10">
          {/* Services Section */}
          <nav>
            <h6 className="footer-title">Services</h6>
            <p className="text-left">
              We are a passionate team dedicated to
              <br />
              providing the best services to our customers.
            </p>
          </nav>

          {/* Quick Links Section */}
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover" href="#">
              About us
            </a>
            <a className="link link-hover" href="#">
              Contact
            </a>
            <a className="link link-hover" href="#">
              Service
            </a>
          </nav>

          {/* Subscription Form */}
          <form>
            <h6 className="footer-title">Subscribe</h6>
            <fieldset className="-ml-8 md:-ml-0">
              <label className="label">
                <span className="label-text text-white">
                  Subscribe to our newsletter for the latest updates.
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item text-black"
                />
                <button className="btn btn-warning join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>

        {/* Bottom Footer */}
        <hr className="my-4 border-gray-600" />
        <div className="footer footer-center bg-inherit text-white p-4">
          <aside>
            <p>Copyright © 2024 - All rights reserved by Abdul Mazid Akash</p>
          </aside>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
