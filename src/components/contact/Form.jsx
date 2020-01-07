import React, { Component } from 'react';
import './contact.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="mailing">
                
                <h1>Send an Email</h1>

                <textarea 
                    className="username"
                    name="mailing"
                    onChange={this.handleNameChange}
                    placeholder="Name"
                    required
                    value={this.state.name}
                />

                <textarea 
                    className="email"
                    name="mailing"
                    onChange={this.handleEmailChange}
                    placeholder="Email"
                    required
                    value={this.state.email}
                />

                <textarea 
                    className="message"
                    name="mailing"
                    onChange={this.handleChange}
                    placeholder="Message"
                    required
                    value={this.state.feedback}

                />
                
                <input type="button" value="Send" className="button" onClick={this.handleSubmit}/>
            </form>
        )
    }

    handleChange(event) {
        this.setState({feedback: event.target.value })
    }
    
    handleEmailChange(event) {
        this.setState({ email: event.target.value })   
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }
    
    handleSubmit(event) {
        const templateId = 'template_IYLcv5p7';

        this.sendFeedback(
            templateId,{
                message_html: this.state.feedback,
                from_name: this.state.name,
                reply_to: this.state.email
            }
        )
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
        'gmail', templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}

export default ContactForm;