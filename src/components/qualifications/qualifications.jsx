import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Qualifications</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content c-plus-plus"></div>
          <h1>c++</h1>
        </div>
        <div className="qualification">
          <div className="content c-sharp"></div>
          <h1>c#</h1>
        </div>
        <div className="qualification">
          <div className="content kotlin"></div>
          <h1>kotlin</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
