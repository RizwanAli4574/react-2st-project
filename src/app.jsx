import React from "react";
import "./commponents/cards/style.css";
import Footer from "./commponents/cards/Footer";
import Cards from "./commponents/cards/Crads";

export default function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <Cards
            pic="💡"
            text="Instant Server Start"
            p="On demand file serving over native ESM, no bundling required!"
          />
          <Cards
            pic="⚡️"
            text="Lightning Fast HMR"
            p="Hot Module Replacement (HMR) that stays fast regardless of app size."
          />
          <Cards
            pic="🛠️"
            text="Rich Features"
            p="Out-of-the-box support for TypeScript, JSX, CSS and more."
          />
          <Cards
            pic="📦"
            text="Optimized Build"
            p="Pre-configured Rollup build with multi-page and library mode support."
          />
          <Cards
            pic="🔩"
            text="Universal Plugins"
            p="Rollup-superset plugin interface shared between dev and build."
          />
          <Cards
            pic="🔑"
            text="Fully Typed APIs"
            p="Flexible programmatic APIs with full TypeScript typing."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
