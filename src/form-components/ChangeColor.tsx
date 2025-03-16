import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
    ];
    return (
        <div>
            <h3>Change Color</h3>

            <FormGroup>
                {colors.map((col) => (
                    <Form.Check
                        key={col}
                        inline
                        type="radio"
                        name="color"
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                        id={`color-${col}`}
                        label={col}
                        value={col}
                        checked={color === col}
                    />
                ))}
            </FormGroup>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    width: "200px",
                    textAlign: "center",
                    borderRadius: "4px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
