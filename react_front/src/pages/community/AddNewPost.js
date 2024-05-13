import React from "react"
import "../../css/community/addPost.css"

export default function AddNewPost() {
    return (
        <div className="add_post_container">
            <h2>글 작성하기</h2>
            <form className="add_post_form">
                <div className="title_wrap add_post_section">
                    <div className="title_name">제목</div>
                    <input className="title_input" placeholder="글 제목을 입력하세요."></input>
                </div>
                <div className="content_wrap add_post_section">
                    <div className="content_name">내용</div>
                    <textarea className="content_input" placeholder="글 내용을 입력하세요."></textarea>
                </div>
                <div className="tag_wrap add_post_section">태그</div>
                <div className="media_wrap add_post_section">첨부파일</div>
                <div className="addBtn_wrap add_post_section">
                    <button>작성하기</button>
                </div>
            </form>
        </div>
    )
}

// 게시물 ID(디자인상 생략가능)
// 게시물 제목
// 게시물 내용
// 작성자 ID(디자인상 생략가능)
// 작성 일자(디자인상 생략가능)
// 조회수(0)(자동)
// 댓글 수(0)(자동)
// 좋아요 수(0)(자동)
// 태그
// 첨부파일(사진, 동영상)