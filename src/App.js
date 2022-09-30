// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';

const quotes = [["Don't settle for what life gives you; make life better and build something.", "Ashton Kutcher"],
["Live for each second without hesitation.", "Elton John"],
["Life is a succession of lessons which must be lived to be understood.", "Helen Keller"],
["Keep calm and carry on.", "Winston Churchill"],
["Keep smiling, because life is a beautiful thing and there’s so much to smile about.", "Marilyn Monroe"],
["You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "Dr. Seuss"],
["The greatest pleasure of life is love.", "Euripides"],
["The two most important days in your life are the day you are born and the day you find out why.", "Mark Twain"],
["Too many of us are not living our dreams because we are living our fears.", " Les Brown"],
["If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person.", "Bill Clinton"],
["Every moment is a fresh beginning.", "T.S. Eliot"],
["If you can do what you do best and be happy, you're further along in life than most people.", "Leonardo DiCaprio"],
["It is our choices that show what we truly are, far more than our abilities.", "J. K. Rowling"],
["The best way to predict your future is to create it.", "Abraham Lincoln"],
["Sometimes you can't see yourself clearly until you see yourself through the eyes of others.", "Ellen DeGeneres"],
["All life is an experiment. The more experiments you make, the better.", "Ralph Waldo Emerson"],
["Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", "Leo Burnett"],
["Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.", "Rob Siltanen"],
["I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.", "Marilyn Monroe"]];


class randomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0][0],
      author: quotes[0][1],
      color: "rgb(255, 170, 0)"

    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let ind = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[ind][0],
      author: quotes[ind][1],
    });
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    let pageColor = `rgb(${random1},${random2},${random3})`;
    let hoverColor = `rgba(${random1},${random2},${random3},0.8)`;

    document.documentElement.style.setProperty("--page-color", pageColor);
    document.documentElement.style.setProperty("--hover-color", hoverColor);
  }

  render() {

    return (

      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div id="container">
          <div id="">
            <div id="quoteBox">
              <div id="text">
                <h1 id="quote"><span className="fa fa-quote-left" id="quote-icon"></span> {this.state.quote}</h1>
                <p id="author">- {this.state.author}</p>
              </div>
              <div id="box2">
                <button className="btn" title="post on facebook" ><a href="https://www.facebook.com" target="_blank" className="links"><i className="fa fa-facebook"></i></a></button>
                <button className="btn" title="post on twitter"><a href="twitter.com/intent/tweet" className="links" id="tweet-quote" target="_blank"><i className="fa fa-twitter"></i></a></button>
                <button id="new-quote" onClick={this.handleClick} title="generate new quote">New quote</button>
              </div>
            </div>
            <div id="creator">
              <p>by pavan</p>
            </div>
          </div>
        </div>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </div>)
  }
}


export default randomQuoteMachine;
