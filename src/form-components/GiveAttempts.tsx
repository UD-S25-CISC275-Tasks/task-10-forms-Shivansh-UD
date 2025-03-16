import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attmpt, setAttmpt] = useState<number>(3);
    const [requestedAttmpt, setRequestedAttpmt] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setRequestedAttpmt(value);
        } else {
            setRequestedAttpmt(0);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <Form.Group controlId="formAnswerChecker">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttmpt === 0 ? "" : requestedAttmpt}
                    onChange={updateAttempts}
                />
            </Form.Group>

            <div>Number of attempts: {attmpt}</div>

            <Button
                onClick={() => {
                    setAttmpt(attmpt - 1);
                }}
                disabled={attmpt === 0}
            >
                use
            </Button>

            <Button
                onClick={() => {
                    setAttmpt(attmpt + requestedAttmpt);
                }}
            >
                gain
            </Button>
        </div>
    );
}
