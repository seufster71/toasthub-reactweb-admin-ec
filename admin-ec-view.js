import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function AdminECView(props) {

    return (
      <div>
        {props.children}
      </div>
    );
}


AdminECView.propTypes = {
  children: PropTypes.array
};
