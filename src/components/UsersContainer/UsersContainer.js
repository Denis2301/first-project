import React from "react";
import { UsersView } from "./UsersView";
import { connect } from "react-redux";
import { acceptFollow } from "../../redux/usersReducer";
import { acceptUnfollow } from "../../redux/usersReducer";
import { Preloader } from "../common/Preloader/Preloader";
import { requestUsers } from "../../redux/usersReducer";
import { follow, unFollow } from "../../redux/usersReducer";
import { compose } from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getFollowInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/usersSelector";
class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        console.log("Render Profile");
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <UsersView
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        followingInProgress={this.props.followingInProgress}
                        acceptFollow={this.props.acceptFollow}
                        acceptUnfollow={this.props.acceptUnfollow}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                    />
                )}
            </>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     };
// };
const mapStateToProps = (state) => {
    console.log("mapStateToProps Profile");
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        acceptFollow,
        acceptUnfollow,
        requestUsers,
    })
)(UsersAPIContainer);
