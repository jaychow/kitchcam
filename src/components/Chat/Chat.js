import React, { Component, PropTypes } from 'react';

export default class Chat extends Component {
    static propTypes = {
        messages: PropTypes.array
    };

    state = {
        messages: [
            {
                id: this.generateMessageId(),
                message: 'I\'m the recipient! (The person you\'re talking to)',
                senderName: 'Elon Musk',
                date: '11/11/2019'
            },
            {
                id: this.generateMessageId(),
                message: 'blah blah blah',
                senderName: 'Ali fern',
                date: '11/11/2019'
            },
            {
                id: this.generateMessageId(),
                message: 'I\'m you -- the blue bubble!',
                senderName: 'patrick I',
                date: '11/11/2019'
            }
        ],
        is_typing: false,
        chatMessage: '',
        hideChat: false
    };

    generateMessageId() {
        return 'kitchcam' + Math.random().toString(36).substr(2, 9);
    }

    submitChat(event) {
        event.preventDefault();
        const input = this.state.chatMessage;

        if (!input) {
            return false;
        }

        this.pushMessage(this.generateMessageId(), input);
        this.setState({chatMessage: ''});

        return false;
    }

    pushMessage(messageId, message) {
        const prevState = this.state;
        const newMessage = {
            id: messageId,
            message,
            senderName: 'patrick',
        };
        prevState.messages.push(newMessage);
        this.setState(this.state);
    }

    toggleChat() {
        this.setState({hideChat: !this.state.hideChat});
    }

    renderChats() {
        const styles = require('./Chat.scss');

        return this.state.messages.map(message => {
            return (
                <li key={message.id} className={styles.bubbleChat}>
                    <div className={styles.imgPreview}></div>
                    <span className={styles.message}>{message.senderName}: {message.message}</span>
                    <span className={styles.messageDate}>{message.date}</span>
                </li>
            );
        });
    }

    render() {
        const styles = require('./Chat.scss');
        let chatClass = styles.chatParent + 'hidden-xs col-sm-4';
        if (this.state.hideChat) {
            chatClass += ' hidden';
        }

        return (
            <div className={chatClass}>
                <div className={styles.chat}>
                    <div>KitchCam Chat</div>
                    <i className={styles.closeChat + ' fa fa-times'}
                       onClick={this.toggleChat.bind(this)}/>
                    <div className={styles.messageList}>
                        <ul className="list-unstyled">
                            {this.renderChats()}
                        </ul>
                    </div>
                    <div className={styles.inputSection}>
                        <input type="text" placeholder="Send Message" className={styles.chatBox}
                               value={this.state.chatMessage}
                               onChange={(event) => this.setState({chatMessage: event.target.value})}>
                        </input>
                        <i className="fa fa-cog"/>
                        <button className="btn btn-default pull-right"
                                onClick={this.submitChat.bind(this)}> Send
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
