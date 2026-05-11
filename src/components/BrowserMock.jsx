const BrowserMock = ({ accent = "rgba(7,138,245,0.25)" }) => (
  <div className="browser-mock">
    <div className="browser-bar">
      <span /><span /><span />
      <div className="browser-url" />
    </div>
    <div className="browser-body">
      <div className="browser-line medium" />
      <div className="browser-line short" />
      <div className="browser-block" style={{ background: accent }} />
      <div className="browser-line" />
      <div className="browser-line medium" />
      <div className="browser-line short" />
    </div>
  </div>
);

export default BrowserMock;
