import axios from "axios";
import React from "react";
import BaustelleList from "./baustelleList";

export default function AutobahnList() {
    const [post, setPost] = React.useState<any>(null);

    const baseURL = "https://verkehr.autobahn.de/o/autobahn/";

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(response);
        });
    }, []);

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
        <div className="roads">
            {post.roads.map((road: string) => [<button onClick={() => showDescription(road)}>{road}</button>,
                <div id={road} className="road">
                <BaustelleList roadID={road}/>
            </div>])}
        </div>
    );
}