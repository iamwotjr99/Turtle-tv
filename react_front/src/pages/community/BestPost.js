import React from "react";
import "../../css/community/main.css";
import { Link } from "react-router-dom";
import Flicking from "@egjs/react-flicking";

export default function BestPost() {
    return (
        <section className="community_section">
                <section className="component_container">
                    <div className="component_header">
                        <strong className="component_title">인기글</strong>
                        <Link className="component_link">전체 보기</Link>
                    </div>
                    <div className="news_list">
                        <Flicking
                            className="news_flicking"
                            hanger="0"
                            anchor="0"
                            align={"prev"}
                            onMoveEnd={e => {
                                console.log(e);
                            }}>
                            <div className="news_item">
                                <div className="news_container">
                                    <div className="news_header">
                                        <div className="news_profile" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Z3QtBsx0ZUufuCWR3BMKj9xRtzhKyNcxs0LcJLAdDQ&s)`}}></div>
                                        <div className="news_box">글쓴이1</div>
                                    </div>
                                    <div className="news_content">내용</div>
                                    <div className="news_footer">댓글</div>
                                </div>
                            </div>
                            <div className="news_item">
                                <div className="news_container">
                                    <div className="news_header">
                                        <div className="news_profile" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Z3QtBsx0ZUufuCWR3BMKj9xRtzhKyNcxs0LcJLAdDQ&s)`}}></div>
                                        <div className="news_box">글쓴이2</div>
                                    </div>
                                    <div className="news_content">내용</div>
                                    <div className="news_footer">댓글</div>
                                </div>
                            </div>
                            <div className="news_item">
                                <div className="news_container">
                                    <div className="news_header">
                                        <div className="news_profile" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Z3QtBsx0ZUufuCWR3BMKj9xRtzhKyNcxs0LcJLAdDQ&s)`}}></div>
                                        <div className="news_box">글쓴이3</div>
                                    </div>
                                    <div className="news_content">내용</div>
                                    <div className="news_footer">댓글</div>
                                </div>
                            </div>
                            <div className="news_item">
                                <div className="news_container">
                                    <div className="news_header">
                                        <div className="news_profile" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Z3QtBsx0ZUufuCWR3BMKj9xRtzhKyNcxs0LcJLAdDQ&s)`}}></div>
                                        <div className="news_box">글쓴이4</div>
                                    </div>
                                    <div className="news_content">내용</div>
                                    <div className="news_footer">댓글</div>
                                </div>
                            </div>
                            <div className="news_item">
                                <div className="news_container">
                                    <div className="news_header">
                                        <div className="news_profile" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Z3QtBsx0ZUufuCWR3BMKj9xRtzhKyNcxs0LcJLAdDQ&s)`}}></div>
                                        <div className="news_box">글쓴이5</div>
                                    </div>
                                    <div className="news_content">내용</div>
                                    <div className="news_footer">댓글</div>
                                </div>
                            </div>
                            <div className="news_item">
                                <div className="news_container">
                                    <div className="news_header">
                                        <div className="news_profile" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Z3QtBsx0ZUufuCWR3BMKj9xRtzhKyNcxs0LcJLAdDQ&s)`}}></div>
                                        <div className="news_box">글쓴이6</div>
                                    </div>
                                    <div className="news_content">내용</div>
                                    <div className="news_footer">댓글</div>
                                </div>
                            </div>
                            <div className="news_item">
                                <div className="news_container">
                                    <div className="news_header">
                                        <div className="news_profile" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Z3QtBsx0ZUufuCWR3BMKj9xRtzhKyNcxs0LcJLAdDQ&s)`}}></div>
                                        <div className="news_box">글쓴이7</div>
                                    </div>
                                    <div className="news_content">내용</div>
                                    <div className="news_footer">댓글</div>
                                </div>
                            </div>
                            
                        </Flicking>
                    </div>
                </section>
            </section>
    )
}