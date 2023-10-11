import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function Grid() {
    const [operand, set_operand] = useState("");
    const [flag, set_flag] = useState(false);
    const [count, set_count] = useState("");
    const [prev_val, set_prev_val] = useState(0);
    const [next_val, set_next_val] = useState("");
  function cal(operand) {
    switch (operand) {
      case "*":
        set_count(parseFloat(prev_val) * parseFloat(next_val));
        set_flag(false);
        set_prev_val(0);
        set_next_val("");
        set_operand("");
        break;
      case "/":
        set_count(parseFloat(prev_val) / parseFloat(next_val));
        set_flag(false);
        set_prev_val(0);
        set_next_val("");
        set_operand("");
        break;
      case "+":
        set_count(parseFloat(prev_val) + parseFloat(next_val));
        set_flag(false);
        set_prev_val(0);
        set_next_val("");
        set_operand("");
        break;
      case "-":
        set_count(parseFloat(prev_val) - parseFloat(next_val));
        set_flag(false);
        set_prev_val(0);
        set_next_val("");
        set_operand("");
        break;
    }
  }
  function handleText(e) {
    if (e.target.value >= 0 && e.target.value <= 9) {
      if (flag) {
        set_next_val(next_val + e.target.value);
      }
      set_count(count + e.target.value);
    } else {
      switch (e.target.value) {
        case "cls":
          set_count("");
          set_flag(false);
          set_prev_val(0);
          set_next_val("");
          set_operand("");
          break;
        case "del":
            if(typeof count!==String){
                set_count("");
                set_flag(false);
                set_prev_val(0);
                set_next_val("");
                set_operand("");
                break;
            }
          set_count(count.substring(0, count.length - 1));
          break;
        case ".":
          set_count(count + e.target.value);
      }
      if (e.target.value === "*") {
        if (flag === false) {
          set_operand("*");
          set_flag(true);
          set_prev_val(count);
          set_count(count + e.target.value);
        } else {
          set_count(count);
        }
      } else if (e.target.value === "/") {
        if (flag === false) {
          set_operand("/");
          set_flag(true);
          set_prev_val(count);
          set_count(count + e.target.value);
        } else {
          set_count(count);
        }
      } else if (e.target.value === "-") {
        if (flag === false) {
          set_operand("-");
          set_flag(true);
          set_prev_val(count);
          set_count(count + e.target.value);
        } else {
          set_count(count);
        }
      } else if (e.target.value === "+") {
        if (flag === false) {
          set_operand("+");
          set_flag(true);
          set_prev_val(count);
          set_count(count + e.target.value);
        } else {
          set_count(count);
        }
      }
      if (e.target.value === "=") {
        cal(operand);
      }
    }
  }
  return (
    <>
      <div className="container mx-auto mystyle">
        <div className="row justify-content-center">
          <div className="col align border border-info rounded">{count}</div>
        </div>
        <div className="row justify-content-center">
          <button
            className="col btn btn-danger m-1"
            value={"cls"}
            onClick={handleText}
          >
            CLS
          </button>
          <button
            className="col btn btn-danger m-1"
            value={"del"}
            onClick={handleText}
          >
            DEL
          </button>
        </div>
        <div className="row justify-content-center">
          <button
            className="col btn btn-danger m-1"
            onClick={handleText}
            value={7}
          >
            7
          </button>
          <button
            className="col btn btn-danger m-1"
            onClick={handleText}
            value={8}
          >
            8
          </button>
          <button
            className="col btn btn-danger m-1"
            value={9}
            onClick={handleText}
          >
            9
          </button>
          <button
            className="col btn btn-danger m-1"
            value={"/"}
            onClick={handleText}
          >
            /
          </button>
        </div>
        <div className="row align-items-center">
          <button
            className="col btn btn-danger m-1"
            value={4}
            onClick={handleText}
          >
            4
          </button>
          <button
            className="col btn btn-danger m-1"
            value={5}
            onClick={handleText}
          >
            5
          </button>
          <button
            className="col btn btn-danger m-1"
            value={6}
            onClick={handleText}
          >
            6
          </button>
          <button
            className="col btn btn-danger m-1"
            value={"*"}
            onClick={handleText}
          >
            *
          </button>
        </div>
        <div className="row align-items-center">
          <button
            className="col btn btn-danger m-1"
            value={1}
            onClick={handleText}
          >
            1
          </button>
          <button
            className="col btn btn-danger m-1"
            value={2}
            onClick={handleText}
          >
            2
          </button>
          <button
            className="col btn btn-danger m-1"
            value={3}
            onClick={handleText}
          >
            3
          </button>
          <button
            className="col btn btn-danger m-1"
            value={"-"}
            onClick={handleText}
          >
            -
          </button>
        </div>
        <div className="row align-items-center">
          <button
            className="col btn btn-danger m-1"
            value={0}
            onClick={handleText}
          >
            0
          </button>
          <button
            className="col btn btn-danger m-1"
            value={"."}
            onClick={handleText}
          >
            .
          </button>
          <button
            className="col btn btn-danger m-1"
            value={"="}
            onClick={handleText}
          >
            =
          </button>
          <button
            className="col btn btn-danger m-1"
            value={"+"}
            onClick={handleText}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
export { Grid };
