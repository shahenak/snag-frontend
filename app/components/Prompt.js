var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var username = require('../styles').username;
var message = require('../styles').message;
var date = require('../styles').date;
var container = require('../styles').container;
var link = require('../styles').link;

function puke (object) {
  return <pre>{JSON.stringify(object, null, " ")}</pre>
}

function Prompt (props) {
  console.log(props);
  if (props.info.data) {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <button onClick={props.onClick} className='btn center'>Update</button><br /><br />
        {props.info.data.map(function (tag, i) {
          return (
            <div className='container' style={container} key={i}>
              <div style={username}><strong>{tag.username}</strong></div>
              <div style={message}>{tag.message}</div>
              <div style={date}>{(tag.date).slice(0,10)}</div>
              <a style={link} href={tag.url}>Reply</a>
            </div>
          )
        })}
      </div>
    )
  }
  else {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <button onClick={props.onClick} className='btn center'>Update</button>
      </div>
    )
  }
}

Prompt.propTypes = {
  // onSubmitUser: PropTypes.func.isRequired,
  // onUpdateUser: PropTypes.func.isRequired,
  // onKey: PropTypes.func.isRequired,
  // hashtag: PropTypes.string.isRequired,
  // // info: PropTypes.array.isRequired,
}

module.exports = Prompt;
