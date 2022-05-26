import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonNav from "../Nav/ButtonNav";

const Counter = ({ id }) => {
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 120));
  useEffect(() => {
    const countTimer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(countTimer);
  }, [seconds]);
  return (
    <div className="count">
      <div className="countSeconds">
        <strong>{`Seconds ${seconds} left`}</strong>
      </div>
      {seconds > 0 ? (
        <Link to={`/product_detail/${id}`}>
          <ButtonNav text={"Go to detail"}></ButtonNav>
        </Link>
      ) : (
        <p>Very late,this product was taken away </p>
      )}
    </div>
  );
};

export default Counter;
