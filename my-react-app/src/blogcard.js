import React from "react"

import { dumpLogs } from "./utils";

const BlogCard = (props) => {
    dumpLogs(props);
    return (
        <div className="BlogCard">
            <h3>Blog title</h3>
            <p>Blog Description</p>
        </div>
    )
}

export default BlogCard;