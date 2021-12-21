import "./magicBall.css";
import { useState, useEffect } from "react";

const MagicBall = ({ result, setTirada }) => {
  const [visible, setVisible] = useState(false);
  const [visibleCSS, setVisibleCSS] = useState("");

  useEffect(() => {
    if (visible) {
      setVisibleCSS("m-result-visible");
    }else{
        setVisibleCSS("");
    }
  }, [visible]);

  const handleClick = () => {
    setVisible(true);
  };

  const handleRestart = () => {
      setVisible(false);
      setTirada(true);
  }

  return (
    <div className="m-main">
      <div className="m-magicball-img" onClick={handleClick}>
        <div className="m-magicball-text">
          <div className={`${visibleCSS} m-result`}>{result}</div>
        </div>
      </div>
      <div className="m-button">
          <button className="m-button-style" type="submit" onClick={handleRestart}>Prueba otra vez</button>
      </div>
    </div>
  );
};

export default MagicBall;
