import React from 'react-dom'
import api from "../../service/api"
import axios from "axios"
import RectButton from '../../style/component/rectBtn'
import InputText from '../../style/component/inputText'
import { Link } from 'react-router-dom'
import config from '../../style/config/config'
import { useState } from 'react'

const Sign = () => {

    const [userInfo, setUserInfo] = useState()

    const setSignin = () => {
        api.get("signin", { params: { userInfo: userInfo } })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const jsondata = {
        username : "oys",
        years : "19"
    }
    const setSignup = () => {
        api.post("/signup", jsondata)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className={config.baseclass}>
            <div className={config.baseclass}
                style={{
                    width: "40%",
                    height: "500px",
                    backgroundgroundColor: "red",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    marginTop: "200px"
                }}>
                <InputText placeholder="Please your name"
                    onChange={(e) => { setUserInfo(e.target.value) }}
                    mt="10px" mb="10px" />
                <RectButton text="log in" onClick={setSignin} mt="10px" mb="10px" />
                <RectButton text="sign up" onClick={setSignup} mt="10px" mb="10px" />
            </div>
        </div>
    );
}

export default Sign