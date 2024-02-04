import React from "react";
import style from "./style.module.css";

const Comment = () => {
    return (
        <>
            <div class={style.commentsContainer}>
                <h1>
                    Comments <span className={style.fancy}>11</span>
                </h1>

                <ul id={style.commentsList} class={style.commentsList}>
                    {/* Main comment container */}
                    <li>
                        {/* comment main level */}
                        <div class={style.commentMainLevel}>
                            <div class={style.commentAvatar}>
                                <img
                                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                                    alt=""
                                />
                            </div>

                            <div class={style.commentBox}>
                                <div class={style.commentHead}>
                                    <h6 class={`${style.commentName} `}>
                                        Agustin Ortiz
                                    </h6>
                                    <span>20 minutes ago</span>
                                    <i class="fa fa-reply"></i>
                                    <i class="fa fa-heart"></i>
                                </div>
                                <div class={style.commentContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Velit omnis animi et iure
                                    laudantium vitae, praesentium optio,
                                    sapiente distinctio illo?
                                </div>
                            </div>
                        </div>

                        {/* comment reply level */}
                        <ul class={`${style.commentsList} ${style.replyList}`}>
                            {/* reply one */}
                            <li>
                                <div class={style.commentAvatar}>
                                    <img
                                        src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                                        alt=""
                                    />
                                </div>

                                <div class={style.commentBox}>
                                    <div class={style.commentHead}>
                                        <h6 class={style.commentName}>
                                            Lorena Rojero
                                        </h6>
                                        <span>10 minutes ago</span>
                                        <i class="fa fa-reply"></i>
                                        <i class="fa fa-heart"></i>
                                    </div>
                                    <div class={style.commentContent}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Velit omnis animi et
                                        iure laudantium vitae, praesentium
                                        optio, sapiente distinctio illo?
                                    </div>
                                </div>
                            </li>

                            {/* reply two */}
                            <li>
                                <div class={style.commentAvatar}>
                                    <img
                                        src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                                        alt=""
                                    />
                                </div>

                                <div class={style.commentBox}>
                                    <div class={style.commentHead}>
                                        <h6 class={`${style.commentName}`}>
                                            Agustin Ortiz
                                        </h6>
                                        <span>10 minutes ago</span>
                                        <i class="fa fa-reply"></i>
                                        <i class="fa fa-heart"></i>
                                    </div>
                                    <div class={style.commentContent}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Velit omnis animi et
                                        iure laudantium vitae, praesentium
                                        optio, sapiente distinctio illo?
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    {/* Main comment container */}
                    <li>
                        <div class={style.commentMainLevel}>
                            <div class={style.commentAvatar}>
                                <img
                                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                                    alt=""
                                />
                            </div>

                            <div class={style.commentBox}>
                                <div class={style.commentHead}>
                                    <h6 class={style.commentName}>
                                        <a href="#">Lorena Rojero</a>
                                    </h6>
                                    <span>10 minutes ago</span>
                                    <i class="fa fa-reply"></i>
                                    <i class="fa fa-heart"></i>
                                </div>
                                <div class={style.commentContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Velit omnis animi et iure
                                    laudantium vitae, praesentium optio,
                                    sapiente distinctio illo?
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Comment;
