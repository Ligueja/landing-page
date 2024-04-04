import { Fragment } from "react/jsx-runtime";
import { Welcome } from "../components/styled/Welcome";
import logo from "../assets/Logo-Grande.png";
import { Logo } from "../components/styled/Logo";
import { Footer } from "../components/functional/Footer";
import { Banner } from "../components/functional/Banner";

export function Home() {
  return (
    <Fragment>
      <Welcome>
        <Logo $image={logo} />
        <p>Faço suas melhores recordações!!!</p>
      </Welcome>
      <Banner />
      <Footer />
    </Fragment>
  );
}
