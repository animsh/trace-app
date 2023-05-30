import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const teamMembers = [
    {
        name: "Professor",
        details: "Professor details here...",
        github: "https://github.com/professor",
        email: "professor@example.com",
        linkedin: "https://www.linkedin.com/professor",
    },
    {
        name: "Team Member 1",
        details: "Team member 1 details here...",
        github: "https://github.com/member1",
        email: "member1@example.com",
        linkedin: "https://www.linkedin.com/member1",
    },
    {
        name: "Team Member 2",
        details: "Team member 2 details here...",
        github: "https://github.com/member2",
        email: "member2@example.com",
        linkedin: "https://www.linkedin.com/member2",
    },
    {
        name: "Team Member 3",
        details: "Team member 3 details here...",
        github: "https://github.com/member3",
        email: "member3@example.com",
        linkedin: "https://www.linkedin.com/member3",
    },
    {
        name: "Team Member 4",
        details: "Team member 4 details here...",
        github: "https://github.com/member4",
        email: "member4@example.com",
        linkedin: "https://www.linkedin.com/member4",
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
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" style={styleAncher}><GitHubIcon /> </a>
                                        <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"> <EmailIcon /></a>
                                        <a style={styleAncher} href={member.linkedin} target="_blank" rel="noopener noreferrer"> <LinkedInIcon /></a>
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
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" style={styleAncher}><GitHubIcon /> </a>
                                        <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"> <EmailIcon /></a>
                                        <a style={styleAncher} href={member.linkedin} target="_blank" rel="noopener noreferrer"> <LinkedInIcon /></a>
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
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" style={styleAncher}><GitHubIcon /> </a>
                                        <a style={{ marginLeft: "24px", marginRight: "24px", ...styleAncher }} href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"> <EmailIcon /></a>
                                        <a style={styleAncher} href={member.linkedin} target="_blank" rel="noopener noreferrer"> <LinkedInIcon /></a>
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
