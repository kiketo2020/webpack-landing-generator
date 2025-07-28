
// Simple rule-based chatbot
import $ from 'jquery';

const responses = [
  { pattern: /hola|buenas/i, reply: '¡Hola! ¿En qué puedo ayudarte?' },
  { pattern: /qu[ié]n eres|quien eres/i, reply: 'Soy un bot conversacional de ejemplo.' },
  { pattern: /adi[oó]s|chau/i, reply: '¡Adiós! Espero haberte ayudado.' }
];

function getReply(text) {
  for (const r of responses) {
    if (r.pattern.test(text)) {
      return r.reply;
    }
  }
  return 'Lo siento, no entendí eso.';
}

function addMessage(sender, text) {
  const message = $('<div>').addClass('chat-message').addClass(sender).text(text);
  $('.chat-content').append(message);
  $('.chat-content').scrollTop($('.chat-content')[0].scrollHeight);
}

export default function initChatbot() {
  const chat = $(
    '<div class="chat-bot">\
      <div class="chat-content"></div>\
      <form class="chat-form">\
        <input type="text" class="chat-input" placeholder="Escribe un mensaje..." />\
        <button type="submit">Enviar</button>\
      </form>\
    </div>'
  );
  $('body').append(chat);

  $('.chat-form').on('submit', function(e) {
    e.preventDefault();
    const input = $('.chat-input');
    const text = input.val().trim();
    if (!text) return;
    addMessage('user', text);
    input.val('');
    const reply = getReply(text);
    setTimeout(() => addMessage('bot', reply), 300);
  });
}
