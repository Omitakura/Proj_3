import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/EnterBtn.css"
import "../App.css"

class EnterBtn extends Component {
    handleClick() {
        window.location.href = "login";
    }
    render() {
        const btnStyle = {
            margin: "auto",
        };
        return (
            <>
                <style type="text/css">
                    {`
                .btn-primary {
                background-color: gold;
                border-color: #ffd600;

            }
            `}
                </style>
                <h2 id="cloudTitle"><b>Cloud</b> Carry</h2> <br />
                <div id="EnterBtn">
                    <Button size="lg" style={{ btnStyle }} onClick={this.handleClick}>Welcome</Button>
                </div>
            </>
        )

    }

}

export default EnterBtn