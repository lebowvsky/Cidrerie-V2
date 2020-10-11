import React from "react";

const UnderConstruction = ({page}) => {
  return (
    <section className="under-construction-section">
      <div className="ucs-under-construction-wrapper">
        <p className="ucsucw-text">
          Page <span className="page-style">{page}</span> en construction,
          <br />
          nous serons bientôt là...
        </p>
      </div>
    </section>
  );
};

export default UnderConstruction;
