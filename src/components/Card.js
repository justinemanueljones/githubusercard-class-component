import React from 'react';

function Card(props) {

    return (
        <div class='border' className="max-w-sm rounded overflow-hidden shadow-lg">
            <div >
                <div ></div>
                <div >
                    <img className="w-full"  src={props.data.avatar_url} alt="user" />
                </div>
                <hr />
                <div className="px-6 py-4" >
                <br/>
                    <h2 className="font-bold text-green-500 text-xl mb-2" >{props.data.name}</h2>
                <br/>
                <hr/>
                    <div>
                    
                        <div className="text-gray-700 text-base">Useraname: <a href={props.data.html_url}>
                        {props.data.login}</a></div>
                        <div className="text-gray-700 text-base">Location: {props.data.location}</div>
                        <div className="text-gray-700 text-base">Bio: {props.data.bio}</div>  
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="px-6 py-4">
                <h3 className="text-green-700 text-base">Followers:</h3>
                {props.followers.map(follower => {
                    return (
                        <div className="text-gray-700 text-base">
                        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            {follower.login}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Card;