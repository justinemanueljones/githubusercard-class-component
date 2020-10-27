import React from 'react';

function Card(props) {

    return (
        <div >
            <div>
                <div ></div>
                <div >
                    <img src={props.data.avatar_url} alt="user" />
                </div>
                <hr />
                <div >
                    <h2>{props.data.name}</h2>
                <hr />
                    <div >
                    
                        <div>Useraname: <a href={props.data.html_url}>
                        {props.data.login}</a></div>
                        <div>Location: {props.data.location}</div>
                        <div>Bio: {props.data.bio}</div>  
                    </div>
                </div>
            </div>
            <div >
                <h3>Followers:</h3>
                {props.followers.map(follower => {
                    return (
                        <div>
                            {follower.login}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Card;