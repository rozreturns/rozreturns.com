import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <Image
          width="200"
          height="200"
          alt="rozReturnes"
          src="/rozReturns.png"
        />
        <p className="footer-title pl-5 w-[200px] ">
          Roz Returns
          <br />
        </p>
      </aside>
      <nav className="flex w-full justify-evenly lg:flex-row">
        <div>
          <h6 className="footer-title">Contact</h6>
          <div className="flex flex-col gap-1">
            <p className="text-white">You can reach out to us at:</p>
            <a href="mailto:deepankur@rozreturns.com">
              deepankur@rozreturns.com
            </a>
            <a href="mailto:ayush@rozreturns.com">ayush@rozreturns.com</a>
          </div>
        </div>
        <div>
          <h6 className="footer-title">Links</h6>
          <div className="flex flex-col gap-1">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#services">Markets</a>
            <a href="#contactUs">Contact</a>
          </div>
        </div>

        <div>
          {" "}
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/company/rozreturns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.152-1.922-3.152-1.922 0-2.218 1.5-2.218 3.048v5.604h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.841-1.562 3.037 0 3.6 2 3.6 4.6v5.595z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
}
