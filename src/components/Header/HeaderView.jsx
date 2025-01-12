import React from "react";
import objStyle from "./Header.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
export const HeaderView = (props) => {
    return (
        <header className={objStyle.header}>
            <div className={objStyle.header__wrapper}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&usqp=CAU"
                    alt="site-logo"
                />
                {props.isAuth ? (
                    <div className={objStyle.loginBlock}>
						<img src={props.photo ? props.photo : userPhoto}/>
                    </div>
                ) : (
                    <div
                        style={{ backgroundColor: "red" }}
                        className={objStyle.loginBlock}
                    >
                        <NavLink to={"/login"}>LOG</NavLink>
                    </div>
                )}

                <div
                    className={`${objStyle.menuBurger} ${
                        props.menuInd ? objStyle.menuBurger_active : ""
                    }`}
                    onClick={() => props.handleMenuView()}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};
