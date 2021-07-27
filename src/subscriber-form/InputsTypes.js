import React, {useLayoutEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useDebounceEmailValidation} from "./utils-hooks";
import {Alert, Col, Form} from "react-bootstrap";

export function SubscribersInput(props) {
    console.log("SubscribersInput", props);
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        tel: ""
    });

    const [popupMsg, setPopupMsg] = useState("default");
    const [showMsg, setShowMsg] = useState(false);
    const [isError, setIsError] = useState(false);
    const emailChange = useRef(false);
    const [validated, setValidated] = useState(false);

    //For cases we need to access the email through local state and not by state
    // (the value will persist between component re-rendering and the reference updating won't trigger a component re-rendering)
    const emailRef = useRef("");
    const validEmail = useDebounceEmailValidation(emailRef.current, 600);

    // // general layout effect - will be happen on each component update - for DEBUG
    // useLayoutEffect(() => {
    //     console.log("details = ", details);
    // });

    //happening after change in the popup message
    useLayoutEffect(() => {
        setTimeout(() => {
            //resetting the msg
            setPopupMsg("");
            setShowMsg(
                false);

        }, 2000);
    }, [popupMsg])

    //happen after change in the details
    useLayoutEffect(() => {
        //handling email changing (validation)
        if (emailChange.current) {
            emailRef.current = details.email;
        }
    }, [details]);

    const handleChange = (ev) => {
        ev.persist();
        if (ev.target.name === "email") {
            emailChange.current = true;
        } else {
            emailChange.current = false;
        }
        setDetails(prevDetails => ({
            ...prevDetails,
            [ev.target.name]: ev.target.value
        }));

    }

    const onSubmit = (ev) => {

        const form = ev.currentTarget;

        //The default validation for the form
        if (form.checkValidity() === false || !validEmail) {
            ev.preventDefault();
            ev.stopPropagation();
            setValidated(true);
            return;
        }

        ev.preventDefault();
        alert("Those are the details - you can send it from here to the server !!! :)  \n\n" +
            "name = " + details.firstName + " " + details.lastName
            + "\nemail = " + details.email
            + "\nphone = " + details.tel);

        //we set validation to false, because by default you don't want to show validation
        setValidated(false);

        setPopupMsg("Your details have been successfully saved");
        setIsError(false);
        setDetails({
            firstName: "",
            lastName: "",
            email: "",
            tel: ""
        });

        setShowMsg(true);

    }

    return (
        <div className="subscribers-input">
            <h3>Subscribers - Form</h3>
            <Form className="needs-validation" noValidate validated={validated}
                  onSubmit={onSubmit}>{/*start of the form block */}
                <Form.Row className="">{/*start of the form row of 12/12 columns*/}

                    <Col xs={12} className="">
                        <Form.Group controlId="firstName" className="">
                            <Form.Control
                                type="text"
                                placeholder="First name"
                                value={details.firstName}
                                onChange={handleChange}
                                name="firstName"
                                required
                                size="sm"
                                aria-label="first name"

                            />


                        </Form.Group>

                    </Col>
                </Form.Row>
                <Form.Row className="">

                    <Col xs={12} className="">
                        <Form.Group controlId="lastName" className="">
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                value={details.lastName}
                                onChange={handleChange}
                                name="lastName"
                                required
                                size="sm"
                                aria-label="last name"

                            />


                        </Form.Group>

                    </Col>
                </Form.Row>
                <Form.Row className="">

                    <Col xs={12} className="">
                        <Form.Group controlId="email" className="">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={details.email}
                                onChange={handleChange}
                                name="email"
                                required
                                size="sm"
                                aria-label="email"
                                isInvalid={!validEmail}

                            />
                            <Form.Control.Feedback type="invalid">Email is Invalid</Form.Control.Feedback>


                        </Form.Group>

                    </Col>
                </Form.Row>
                <Form.Row className="">

                    <Col xs={12} className="">
                        <Form.Group controlId="tel" className="">
                            <Form.Control
                                type="tel"
                                placeholder="Phone"
                                value={details.tel}
                                onChange={handleChange}
                                name="tel"
                                required
                                size="sm"
                                aria-label="phone"

                            />


                        </Form.Group>

                    </Col>
                </Form.Row>
                {showMsg &&
                <Alert variant={isError ? 'danger' : 'success'}>{popupMsg}</Alert>
                }
                <Button type="submit" size="sm">Save</Button>

            </Form>
        </div>
    )
}
