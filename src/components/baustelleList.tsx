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

    function showDescription(id: string){
        const description = document.getElementById(id);
        if (description!.style.display === "block"){
            description!.style.display = "none"
        } else {
            description!.style.display = "block"
        }
    }

    return (
        <div className="baustellen">
            {post.roadworks.map((baustelle: any) =>
            [<button onClick={() => showDescription(baustelle.identifier)}>{baustelle.title}</button>,
                <div id={baustelle.identifier} className="description">
                    {baustelle.description.map((text: any) =>
                    <p>{text}</p>)}
                </div>])}
        </div>
    );
}