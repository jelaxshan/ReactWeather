import React from 'react';


class ErrorMessage  extends React.Component {

  componentDidMount() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render () {
    var {title, message} = this.props;

    return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close="">
              Okay
            </button>
          </p>
        </div>
    )
  }
}
ErrorMessage.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};

ErrorMessage.defaultProps = {
  title: 'Error'
};

export default ErrorMessage ;
