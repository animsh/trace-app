import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const teamMembers = [
    {
        name: "Prof. Sarika Yogesh Pabalkar ",
        details: "Assistant Professor, Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
        github: "",
        email: "sarika.pabalkar@dypvp.edu.in",
        linkedin: "",
    },
    {
        name: "Aishwarya Patni",
        details: "Student, Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
        github: "",
        email: "ash.patni13@gmail.com",
        linkedin: "https://www.linkedin.com/in/aishwarya-patni-152049210/",
    },
    {
        name: "Sakshi Kulkarni",
        details: "Student, Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
        github: "",
        email: "kulkarnisakshi2903@gmail.com",
        linkedin: "https://www.linkedin.com/in/sakshi-kulkarni29",
    },
    {
        name: "Prachi Patel",
        details: "Student, Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
        github: "https://github.com/Prachi056",
        email: "patelps.prachi@gmail.com",
        linkedin: "https://www.linkedin.com/in/prachi-patel-b9033221b",
    },
    {
        name: "Manali Satav",
        details: "Student, Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
        github: "",
        email: "manalisatav1501@gmail.com",
        linkedin: "http://www.linkedin.com/in/manali-satav-421a21216",
    },
];

const About = () => {

    const styleAncher = {
        color: "black",
        textDecoration: "none",
    };

    const styleCard = {
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
    };

    const styleRow = {
        marginTop: "24px",
    };

    return (
        <div className="scale-to-height container-fluid d-flex align-items-center justify-content-center">
            <div style={{ padding: "24px 0px" }} className="container">

                <h4>Trace - Combination of Steganography & Cryptography for Secure File Transfer Over the Internet</h4>
                <p style={{ textAlign: "justify" }}>The aim of this project is to develop a system that combines cryptography and steganography techniques to facilitate secure file transfer over the internet. By integrating these two methodologies, we aim to enhance the confidentiality and integrity of transmitted files, ensuring that only authorized recipients can access the data.</p>

                <h4>Meet The Team!</h4>
                <Row style={styleRow}>
                    {teamMembers.slice(0, 1).map((member, index) => (
                        <Col key={index}>
                            <Card style={styleCard} className="text-center">
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Text>{member.details}</Card.Text>
                                    <div >
                                        {member.github !== "" ? <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }}><GitHubIcon /> </a> : null}
                                        {member.email !== "" ? <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"> <EmailIcon /></a> : null}
                                        {member.linkedin !== "" ? <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={member.linkedin} target="_blank" rel="noopener noreferrer"> <LinkedInIcon /></a> : null}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row style={styleRow}>
                    {teamMembers.slice(1, 3).map((member, index) => (
                        <Col key={index}>
                            <Card style={styleCard} className="text-center">
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Text>{member.details}</Card.Text>
                                    <div >
                                        {member.github !== "" ? <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }}><GitHubIcon /> </a> : null}
                                        {member.email !== "" ? <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"> <EmailIcon /></a> : null}
                                        {member.linkedin !== "" ? <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={member.linkedin} target="_blank" rel="noopener noreferrer"> <LinkedInIcon /></a> : null}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row style={{ ...styleRow, marginBottom: "24px" }}>
                    {teamMembers.slice(3, 5).map((member, index) => (
                        <Col key={index}>
                            <Card style={styleCard} className="text-center">
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Text>{member.details}</Card.Text>
                                    <div >
                                        {member.github !== "" ? <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }}><GitHubIcon /> </a> : null}
                                        {member.email !== "" ? <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"> <EmailIcon /></a> : null}
                                        {member.linkedin !== "" ? <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={member.linkedin} target="_blank" rel="noopener noreferrer"> <LinkedInIcon /></a> : null}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default About;
