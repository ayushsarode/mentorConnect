import React from "react";

function Footer() {
  return (
    <footer className="footer bg-indigo-600 text-white  p-10 px-20">
      <aside>
        <p className="text-5xl font-bold tracking-tight text-foreground">
          mentorConnect
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Links</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Mentors</a>
        <a className="link link-hover">FaQ</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
