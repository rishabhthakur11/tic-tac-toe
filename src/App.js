import React, { useState } from "react";
import Icon from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const itemsArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemsArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemsArray[0] === itemsArray[1] &&
      itemsArray[0] === itemsArray[2] &&
      itemsArray[0] !== "empty"
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
    } else if (
      itemsArray[3] === itemsArray[4] &&
      itemsArray[3] === itemsArray[5] &&
      itemsArray[3] !== "empty"
    ) {
      setWinMessage(`${itemsArray[3]} wins`);
    } else if (
      itemsArray[6] === itemsArray[7] &&
      itemsArray[7] === itemsArray[8] &&
      itemsArray[6] !== "empty"
    ) {
      setWinMessage(`${itemsArray[6]} wins`);
    } else if (
      itemsArray[0] === itemsArray[3] &&
      itemsArray[3] === itemsArray[6] &&
      itemsArray[0] !== "empty"
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
    } else if (
      itemsArray[1] === itemsArray[4] &&
      itemsArray[4] === itemsArray[7] &&
      itemsArray[1] !== "empty"
    ) {
      setWinMessage(`${itemsArray[1]} wins`);
    } else if (
      itemsArray[2] === itemsArray[5] &&
      itemsArray[5] === itemsArray[8] &&
      itemsArray[2] !== "empty"
    ) {
      setWinMessage(`${itemsArray[2]} wins`);
    } else if (
      itemsArray[0] === itemsArray[4] &&
      itemsArray[4] === itemsArray[8] &&
      itemsArray[0] !== "empty"
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
    } else if (
      itemsArray[2] === itemsArray[4] &&
      itemsArray[4] === itemsArray[6] &&
      itemsArray[2] !== "empty"
    ) {
      setWinMessage(`${itemsArray[2]} wins`);
    } else if (!itemsArray.includes("empty")) {
      setWinMessage("Nobody wins");
    }
  };

  const changeItem = (itemnumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemsArray[itemnumber] === "empty") {
      itemsArray[itemnumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mb-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Relode the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "cross" : "circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemsArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
