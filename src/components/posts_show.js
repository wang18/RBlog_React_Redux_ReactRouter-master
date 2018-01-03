import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPost, deletePost} from "../actions/index";

class postShows extends Component{
    componentDidMount(){
        if(!this.props.post){
            const {id}=this.props.match.params;
            this.props.fetchPost(id);
        }
    }
    onDeleteClick(){
        const {id} = this.props.match.params;
        this.props.deletePost(id,() => this.props.history.push('/'));
    }
    render(){
        const {post}=this.props;
        if(!post){
            return (<div>LOADING</div>);
        }
        return (<div>
            <Link to="/">Back to Index</Link>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
        </div>);
    }
}
function mapStateToProps(state, ownProps){
    return {post: state.posts[ownProps.match.params.id]};
}
/*function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPost, deletePost}, dispatch);
}*/
export default connect(mapStateToProps,{fetchPost, deletePost})(postShows);