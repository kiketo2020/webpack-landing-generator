import {} from 'jquery-sticky/jquery.sticky';
import {} from 'jquery.scrollto/jquery.scrollTo';
import '../styles/index.scss';
import './custom';
import initChatbot from './chatbot';

// Initialize simple chatbot on page load
document.addEventListener('DOMContentLoaded', () => {
  initChatbot();
});
