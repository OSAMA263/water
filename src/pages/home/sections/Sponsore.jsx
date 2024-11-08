import AutoSlider from "../../../components/AutoSlider";
import Container from "../../../shared/Container";
import { sponsor_logos } from "../data";

export default function Sponsore() {
  return (
    <Container>
      <section id="sponsors" className="space-y-8 py-20">
        <AutoSlider stagger arr={sponsor_logos} reverse slidesPerView={6} />
      </section>
    </Container>
  );
}
