import axios from "axios";
import React from "react";

export default function BaustelleList(roadID: any) {
    const [post, setPost] = React.useState<any>(null);

    const baseURL = "https://verkehr.autobahn.de/o/autobahn/";
    const addURL = "/services/roadworks";
    React.useEffect(() => {
        axios.get(baseURL + roadID.roadID + addURL).then((response) => {
            setPost(response.data);
        });
    }, [roadID.roadID]);

    if (!post) return null;

    function showDescription(id: string) {
        const description = document.getElementById(id);
        if (description!.style.display === "block") {
            description!.style.display = "none"
        } else {
            description!.style.display = "block"
        }
    }
    if (() => !post.roadworks.isEmpty()) {
        return (
            <div className="baustellen">
                {post.roadworks.map((baustelle: any) =>
                    [<button key={baustelle.identifier+"button"} onClick={() => showDescription(baustelle.identifier)}>{baustelle.title}</button>,
                        <div key={baustelle.identifier + "div"} id={baustelle.identifier} className="description">
                            {baustelle.description.map((text: string, index: number) =>
                                <p key={baustelle.identifier+ index + "text"}>{text}</p>)}
                        </div>])}
            </div>
        );
    } else {
        return (
            <div className="baustellen">
                <p>Keine Baustellen</p>
            </div>
        );
    }
}