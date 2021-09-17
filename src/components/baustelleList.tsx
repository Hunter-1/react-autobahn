import axios from "axios";
import React from "react";

export default function BaustelleList(roadID: any) {
    const [post, setPost] = React.useState<any>(null);

    const baseURL = "https://verkehr.autobahn.de/o/autobahn/";
    const addURL = "/services/roadworks";
    React.useEffect(() => {
        axios.get(baseURL+roadID.roadID+addURL).then((response) => {
            setPost(response.data);
            console.log(response);
        });
    }, [roadID.roadID]);

    if (!post) return null;

    return (
        <div className="baustellen">
            {post.roadworks.map((baustelle: any) =>
            <button>{baustelle.title}</button>)}
        </div>
    );
}