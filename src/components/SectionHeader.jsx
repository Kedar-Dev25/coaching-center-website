// One header used by every section so overline / title / intro look identical everywhere.
function SectionHeader({ overline, title, intro, tone = "light" }) {
  return (
    <div className={`sec-head ${tone === "dark" ? "on-dark" : ""}`}>
      <span className="overline">{overline}</span>
      <h2 className="sec-title">{title}</h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </div>
  );
}

export default SectionHeader;
