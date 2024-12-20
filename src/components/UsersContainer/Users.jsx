import { useEffect } from "react";
import { setUsersAC } from "../../redux/usersReducer";
import objStyle from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";
export const Users = ({ users, follow, unfollow, setUsers }) => {
    useEffect(() => {
        if (users.length == 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response) => {
                    setUsers(response.data.items);
                });
        }
    }, []);

    return (
        <main className={objStyle.content}>
            <h1 className={objStyle.content__title}> Users</h1>
            {users.map((user) => (
                <div className={objStyle.wrapperUser} key={user.id}>
                    <div className={objStyle.status}>
                        <div className={objStyle.status__img}>
                            {" "}
                            <img src={user.photos.small || userPhoto} alt="" />
                        </div>
                        {user.followed === true ? (
                            <button
                                className={objStyle.status__follow}
                                onClick={() => unfollow(user.id)}
                            >
                                Followed
                            </button>
                        ) : (
                            <button
                                className={objStyle.status__follow}
                                onClick={() => follow(user.id)}
                            >
                                Unfollowed
                            </button>
                        )}
                    </div>
                    <div className={objStyle.description}>
                        <div className={objStyle.description__name_location}>
                            <span className={objStyle.description__fullName}>
                                {user.name}
                            </span>
                            <div className={objStyle.description__location}>
                                <span className={objStyle.location_country}>
                                    {"user.location.country"}
                                </span>
                                <span className={objStyle.location_city}>
                                    {"user.location.city"}
                                </span>
                            </div>
                        </div>
                        <p className={objStyle.description__status}>
                            {user.status}
                        </p>
                    </div>
                </div>
            ))}
            <button
                onClick={() => setUsersAC(users)}
                className={objStyle.addUsers}
            >
                Add Users
            </button>
        </main>
    );
};