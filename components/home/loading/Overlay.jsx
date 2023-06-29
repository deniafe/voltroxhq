import { useProgress } from "@react-three/drei";
import { usePlay } from "../../../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            <img className="voltrox" src="/img/logo.png" alt="Logo" /> 
            {/* WAWATMOS
            <div className="spinner">
              <div className="spinner__image" />
            </div> */}
          </h1>
          <p className="intro__scroll">Scroll to begin an immersive flight journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Hope you had a great flight. Now continue your journey...</p>
      </div>
    </div>
  );
};
