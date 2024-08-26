const Footer = () => {
  return (
    <footer className="w-full h-full bg-[black]">
      <div className="flex flex-col md:flex-row px-6 py-8 justify-between gap-y-12">
        <div className="flex flex-col">
          <h1 className="text-white text-[10px] lg:text-[12px]">FASHION</h1>
          <p className="text-white text-[6.49px] lg:text-[8px]">
            Complete your style with awesome clothes from us
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-[50px] gap-y-12">
          <div className="text-white">
            <p className="text-white">Company</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Support</p>
            <p>Careers</p>
          </div>
          <div className="text-white">
            <p className="text-white">Company</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Support</p>
            <p>Careers</p>
          </div>
          <div className="text-white">
            <p className="text-white">Company</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Support</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
