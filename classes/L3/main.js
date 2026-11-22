class Message {
  static numMessage = 0;
  static lenMessage = 0;
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    Message.numMessage++;
    Message.lenMessage += this.body.length;
  }

  static getAverageMessageLength() {
    let avg = Message.lenMessage / Message.numMessage;
    return Math.round(avg * 100) / 100
  }
}

// don't touch below this line

export { Message };
