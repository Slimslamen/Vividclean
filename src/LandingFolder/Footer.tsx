import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsGitlab, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer(): JSX.Element {
  return (
    <FlowbiteFooter>
      <div className="footerDiv w-full bg-customBeige">
        <div className="grid w-full grid-cols-2 px-6 py-8 md:grid-cols-4 text-center space-y-10 md:space-y-0">
          <div>
            <FooterTitle title="Våra tjänster" />
            <FooterLinkGroup col>
              <FooterLink href="#">Allt för ditt hem</FooterLink>
              <FooterLink href="#">Allt för din flytt</FooterLink>
              <FooterLink href="#">Allt för din trädgård</FooterLink>
              <FooterLink href="#">Allt för ert företag</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="help center" />
            <FooterLinkGroup col>
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="legal" />
            <FooterLinkGroup col>
              <FooterLink href="#">Policy</FooterLink>
              <FooterLink href="#">Licenser</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Company" className="mt-12 md:mt-0" />
            <FooterLinkGroup col>
              <FooterLink href="#">Om oss</FooterLink>
              <FooterLink href="#">Karriär</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blogg</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <hr />
        <div className="w-full px-4 py-4 flex items-center justify-between flex-col space-y-5">
          <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
            <FooterIcon href="#" icon={BsFacebook} className="text-black" />
            <FooterIcon href="#" icon={BsInstagram} className="text-black" />
            <FooterIcon href="#" icon={BsTwitter} className="text-black" />
            <FooterIcon href="#" icon={BsGitlab} className="text-black" />
          </div>
          <FooterCopyright href="#" by="VividClean™" year={2024} />
        </div>
      </div>
    </FlowbiteFooter>
  );
}
