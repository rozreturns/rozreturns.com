import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer bg-black text-neutral-content p-10">
      <aside>
        <Image
          width="200"
          height="200"
          alt="RozReturnes"
          src="./rozReturns.png"
        />
        <p className="footer-title pl-5 w-[200px] ">
          Roz Returns
          <br />
        </p>
      </aside>
      <nav className="flex w-full justify-evenly lg:flex-row">
        <div>
          <h6 className="footer-title nova-square-footer">Contact</h6>
          <div className="flex flex-col gap-1">
            <p className="text-white">You can reach out to us at:</p>
            <a href="rozreturns@gmail.com">rozreturns@gmail.com</a>
          </div>
        </div>
        <div>
          <h6 className="footer-title nova-square-footer">Links</h6>
          <div className="flex flex-col gap-1">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contactUs">Contact</a>
          </div>
        </div>

        <div>
          {" "}
          <h6 className="footer-title nova-square-footer">Social</h6>
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
            <a
              href="mailto:rozreturns@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,6l-8,5L4,6H20z M20,18H4V8 l8,5l8-5V18z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
}
