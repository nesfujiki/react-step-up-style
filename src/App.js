import { InlineStyle } from "./components/inlineStyle";
import { CssModules } from "./components/cssModules";
import { StyledJsx } from "./components/styledJsx";
import { StyledComponents } from "./components/styledComponents";
import { Emotion } from "./components/emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
