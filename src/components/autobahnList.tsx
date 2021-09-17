import axios from "axios";
import React from "react";

export default function Ping() {
    const [post, setPost] = React.useState<any>(null);

    const baseURL = "https://verkehr.autobahn.de/o/autobahn/";

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(response);
        });
    }, []);

    if (!post) return null;

    return (
        <div className="roads">
            {post.roads.map((road: string) => <button>{road}</button>)}
        </div>
    );
}