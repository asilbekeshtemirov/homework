import { getComments } from "@/api/comments";
import { Comment } from "@/types/comments";
import { useEffect, useState } from "react";

import cls from "./Comment.module.css";

const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    getComments()?.then((res) => {
      setComments(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1>Comments</h1>
      <div className={cls.commentsContainer}>
        {comments.map((comment) => (
          <div key={comment.id} className={cls.comment}>
            <div className={cls.commentHeader}>
              <div className={cls.commentId}>ID: {comment.id}</div>
              <h3 className={cls.commentName}>{comment.name}</h3>
              <p className={cls.commentEmail}>{comment.email}</p>
            </div>
            <p className={cls.commentBody}>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;
