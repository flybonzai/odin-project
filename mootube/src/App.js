import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">

      </nav>
      <section className="content">
        <section className="media-viewport">
          <section className="player">
            <iframe className="embedded" title="moooootube" src="https://www.youtube.com/embed/XuFwc5TwVtA" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>

          </section>
          <section className="title-bar"><p>Best Friends Play Dark Souls (Part 43)</p></section>
          <section className="comments">

          </section>
        </section>
        <aside className="thumbnails">

        </aside>
      </section>
    </div>
  );
}

export default App;
