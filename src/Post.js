import { Link } from "react-router-dom";
import { BACKEND_SERVER_URL } from "./Helper";

const { formatISO9075 } = require("date-fns");

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
    return (
        <div className="post">
            <Link to={`/post/${_id}`}>
                <img src={`${BACKEND_SERVER_URL}/` + cover} alt="" />
            </Link>
            <div className="texts">
                <Link to={`/post/${_id}`}>
                    <h2>{title} </h2>
                </Link>
                <p className="info">
                    <a href="" className="author">{author.username}</a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>

                <p className="summary">{summary} </p>
            </div>

        </div>
    );
}
