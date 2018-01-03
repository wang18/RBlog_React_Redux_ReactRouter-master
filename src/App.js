import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from "./actions/index"
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderPost(){
        return _.map(this.props.posts, post => {
           return (<li className="list-group-item" key={post.id}>
               <Link to={`/posts/${post.id}`}>{post.title}</Link>
           </li>)
        });
    }
    render(){
        if(!this.props.posts){
            return <div>Loading</div>
        }
        //console.log(this.props.posts);
        return(<div>
            <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new" >Add a Post</Link>
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
                {this.renderPost()}
            </ul>
        </div>);
    }
}
function mapDispatchToProps(dipatch) {
    return bindActionCreators({fetchPosts},dipatch);
}
function mapStateToProps(state) {
    return {posts: state.posts};
}
export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);