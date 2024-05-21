import React, { useState } from "react"
import "../../css/community/addPost.css"
import { addNewPost } from "../../service/communityService"

export default function AddNewPost() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("")

    const onClickSubmit = (e) => {
        e.preventDefault()
        addNewPost(title, content, tag);
    }

    return (
        <div className="add_post_container">
            <h2>글 작성하기</h2>
            <form className="add_post_form" onSubmit={onClickSubmit}>
                <div className="title_wrap add_post_section">
                    <div className="title_name">제목</div>
                    <input className="title_input" placeholder="글 제목을 입력하세요." 
                    onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="content_wrap add_post_section">
                    <div className="content_name">내용</div>
                    <textarea className="content_input" placeholder="글 내용을 입력하세요."
                    onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                {/* tag 부분은 #ㅁㅁㅁ, #ㅇㅇㅇ 이런식으로 #으로 시작되고 끝나는 단어 즉, "키워드"를 구별하는 기능이 필요하다. 
                Idea 1. tag를 키워드 별로 나눠서 list에 넣어서 배열로 저장한다.*/}
                <div className="tag_wrap add_post_section">
                    <div className="tag_name">태그</div>
                    <textarea className="tag_input" placeholder="#태그를 입력하세요."
                    onChange={(e) => setTag(e.target.value)}></textarea>
                </div>
                <div className="media_wrap add_post_section">
                    <div className="media_name">첨부파일</div>
                    <input type="file" accept="image/*, video/*"></input>
                </div>
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