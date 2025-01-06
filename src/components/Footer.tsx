import { FC } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <section>
      <div>
        <a href="wa.me/+2348034467139">
          <BsWhatsapp />
        </a>
        <a href="mailto:vocal4real@gmail.com">
          <CgMail />
        </a>
        <a href="https://www.linkedin.com/in/0sc/">
          <RiLinkedinBoxLine />
        </a>
        <a href="https://x.com/swxsh_etc">
          <FaXTwitter />
        </a>
      </div>
    </section>
  );
};

export default Footer;
