import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function displayRW(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswerChecker">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={displayRW} />
            </Form.Group>
            <div>The answer is: {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
