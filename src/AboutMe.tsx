import './AboutMe.css';
import ContactForm from './ContactForm'; // Import the ContactForm component

/**
 * AboutMe Component
 * 
 * Purpose:
 * This component serves as an "About Me" page. It displays a brief introduction about the user and includes a ContactForm for users to submit their contact information.
 * 
 * Props:
 * This component does not accept any props.
 * 
 * State:
 * This component does not have any local state.
 * 
 * Children:
 * This component renders a ContactForm component.
 * 
 * Usage:
 * <AboutMe />
 */

const AboutMe = () => {
    return (
        <div className="container">
            <h1 className="title">About Me</h1>
            <p className="text">
                Hello! I'm a software developer with a passion for learning new technologies. I have experience in front-end and back-end development, and I'm always looking for new challenges.
            </p>
            <ContactForm />
        </div>
    );
};

export default AboutMe;