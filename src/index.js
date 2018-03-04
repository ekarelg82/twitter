import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function Avatar(){
  return(
<img
src="https://cdn.glitch.com/project-avatar/2d7ba67e-1294-4930-95db-f9eb7a26cc99.png"
className="avatar"
alt="avatar"
width="45px"
height="45px"
/>

  );
}
function Message(){
  return(
    <div className="message">
    You have a message
    </div>
  );
}

function NameWithHandle(){
  return(
    <span className="name-with-handle">
    <span className="handle">@yourhandle</span>
     <span className="name">Your Name</span>

    </span>
  );
}
const Time= ()=><span className="time">3h ago</span>
const ReplyButton=()=><i className="fa fa-reply reply-button"/>;
const RetweetButton=()=><i className="fa fa-retweet retweet-button"/>;
const LikeButton=()=><i className="fa fa-heart like-button"/>;
const MoreOptionsButton=()=><i className="fa fa-ellipsis-h more-options-button"/>;

const Person = props => <span>Hello, {props.name}</span>;

const Person = ({ name, className }) => <span className={className}>Hello, {name}</span>;

const Person = props => {
  const { className, name } = props;
  return <span className={className}>Hello, {name}</span>;
};

function handleAction(event) {
  console.log('Child did: ', event);
}

function Parent() {
  return <Child onAction={handleAction} />;
}

function Child({ onAction }) {
  return <button onClick={onAction} />;
}

function Tweet(){
  return(
<div className="tweet"><Avatar/>
<div className="content">
 <NameWithHandle/><Time/>
 <Message/>
<div className="buttons">
 <ReplyButton />
 <RetweetButton />
 <LikeButton />
 <MoreOptionsButton />
</div>
</div>
</div>)

}


ReactDOM.render(<Tweet />, document.getElementById('root'));
