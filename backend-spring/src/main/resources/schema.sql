drop table member if exists cascade;
create table member (
    member_id bigint generated by default as identity,
    name varchar(10) not null,
    id varchar(20) not null,
    password varchar(100) not null,
    primary key (member_id)
);

drop table article if exists cascade;
create table article (
    article_id bigint generated by default as identity,
    member_id bigint not null,
    title varchar(255) not null,
    content text not null,
    created_at datetime default CURRENT_TIMESTAMP,
    view_count int default 0,
    comment_count int default 0,
    like_count int default 0,
    tags varchar(255),
    FOREIGN key(member_id) REFERENCES member(member_id) ON DELETE CASCADE
);

drop table attachments if exists cascade;
create table attachments(
    id bigint generated by default as identity,
    article_id bigint not null,
    type varchar(50),
    url text not null,
    description text,
    FOREIGN key(article_id) REFERENCES article(article_id) ON DELETE CASCADE
);