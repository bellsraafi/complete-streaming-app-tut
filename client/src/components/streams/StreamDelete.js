import React from 'react';
import { connect} from 'react-redux';

import { fetchStream, deleteStream } from '../../actions';
import Modal from '../../components/Modal';
import history from '../../history';

class StreamDelete extends React.Component {

  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  renderActions = () => (
    <React.Fragment>
      <button className="ui button" onClick={() => history.push('/')} >Cancel</button>
      <button className="ui button negative" onClick={this.onSubmit}>Delete</button>
    </React.Fragment>
  );

  render () {
    return (
      <div>
        <Modal 
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);