import './Contact.css';

function Contact() {
    return (
        <>
            <div className='contactForm-container'>
                <h1>Contact</h1>
                <p>Please, feel free to contact me. And don't hesitate to send me questions!</p>
                <form className='contact-form'>
                    <div className='contact-control'>
                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder='Your name...'
                            required
                        />
                    </div>
                    <div className='contact-control'>
                        <label>Email:</label>
                        <input
                            type="text"
                            placeholder='Your email...'
                            required
                        />
                    </div>
                    <div className='contact-control'>
                        <label>Message:</label>
                        <textarea
                            required
                            placeholder='Your message...'
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
