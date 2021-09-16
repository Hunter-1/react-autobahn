import axios from "axios";
import React from "react";

export default function Ping() {
    const [post, setPost] = React.useState<any>(null);

    React.useEffect(() => {
        axios.get("https://ebzuerich-simple-api.herokuapp.com/ping").then((response) => {
            setPost(response.data);
            console.log(response);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1>{post.message}</h1>
            <p>{post.time}</p>
        </div>
    );
}