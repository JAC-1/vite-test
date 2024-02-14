import "./style.css";
import { gsap } from "gsap";

document.querySelector("#title-container").innerHTML = `
<div class="title-container">
      <h1 class="heading-letter">H</h1>
      <h1 class="heading-letter">E</h1>
      <h1 class="heading-letter">L</h1>
      <h1 class="heading-letter">L</h1>
      <h1 class="heading-letter">O</h1>
</div>
<div class="elijah-container">
     <h1 class="heading-letter elijah">E</h1>
      <h1 class="heading-letter elijah">L</h1>
      <h1 class="heading-letter elijah">I</h1>
      <h1 class="heading-letter elijah">J</h1>
      <h1 class="heading-letter elijah">A</h1>
      <h1 class="heading-letter elijah">H</h1>
</div>
`;

gsap.from(".heading-letter", {
  duration: 1,
  opacity: 0,
  y: "random(-200, 200)",
  stagger: 0.35,
  ease: "inOut",
});
