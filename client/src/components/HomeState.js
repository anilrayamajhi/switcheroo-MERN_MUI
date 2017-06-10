import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Subheader, List, ListItem, makeSelectable, Avatar } from 'material-ui';

import { fetchPosts } from '../actions/index';

var puke = (obj) => {
  return (
    <pre>{JSON.stringify(obj, null, ' ')}</pre>
  )
}

class HomeState extends Component {
  constructor(){
    super();
    this.state ={};
  }

  componentWillMount(){
    this.props.fetchPosts();
  }

  renderData(ele) {
    if(!!ele){
      return(
        <ListItem
        key={ele.id}
        primaryText={(ele.title.length>17)?`${ele.title.slice(0, 17)}...`:ele.title}
        leftAvatar={
          <Avatar className="nav-title">{ele.title.charAt(0)}</Avatar>
        }

      />
      )
    }
  }

  render() {
    return(
      <div>
        {/* {puke(this.props.posts.all)} */}
        {(!this.props.posts.all.length)?this.isLoading:this.props.posts.all.map((el) => this.renderData(el))}

      </div>
    )
  }
}

var mapStateToProps = ({ posts }) => {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(HomeState);
