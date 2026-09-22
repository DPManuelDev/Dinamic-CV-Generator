
CREATE EXTENSION IF NOT EXISTS "pgcrypto";  -- necessário para gen_random_uuid() em PG < 13
#===========================================

CREATE TABLE users (
    user_id             UUID PRIMARY KEY DEFAULT gen_random_uuid,
    email               varchar(100) not null,
    password_hash       text,
    createdAt           timestamp current_timestamp,
    updatedAt           timestamp current_timestamp
)
CREATE TABLE cv(
    cv_id       UUID PRIMARY KEY DEFAULT gen_random_uuid,
    temp_id     UUID REFERENCES template_id(template),
    user_id     UUID REFERENCES user_id(users),
    title       VARCHAR(100) NOT NULL,   
    img_path    text,
    summary     text,
    createdAt   timestamp current_timestamp,
    updatedAt   timestamp current_timestamp,
    isPublic    boolean
);
 
 CREATE TABLE personalInfo(
    personalInfo_id         UUID PRIMARY  KEY DEFAULT gen_random_uuid,
    name                    varchar(100) not null,
    profission              VARCHAR(50),
    email                   varchar(30) not null,
    phone                   varchar(20) NOT NULL,
    location                varchar(30) not null,
    link                    text 
 );

 CREATE TABLE experience (
    experience_id      UUID PRIMARY KEY DEFAULT gen_random_uuid,
    cvId        UUID not null REFERENCES cv (cv_id) on delete cascade,
    role        varchar(50),
    company     varchar(50),
    period      time,
    description text
 );

 CREATE TABLE education (
    education_id        UUID PRIMARY KEY DEFAULT gen_random_uuid,
    cvId                UUID not null REFERENCES cv(cv_id) on delete cascade,
    course              varchar(100) not null,
    institution         varchar(50),
    start_date          timestamp current_timestamp,
    end_date            timestamp current_timestamp
    period              time
 );

 CREATE TABLE skill (
    skill_id    UUID PRIMARY KEY DEFAULT gen_random_uuid,
    cvId        UUID not null REFERENCES cv(cv_id) on delete cascade,
    skillName   varchar(50),
    level       VARCHAR(50)        
 );

 CREATE TABLE language(
    lang_id     UUID PRIMARY KEY DEFAULT gen_random_uuid,
    cvId        UUID not null REFERENCES cv(cv_id) on delete cascade,
    lang_name   VARCHAR(50) not null,
    level       VARCHAR(50) not null
 );

 CREATE TABLE certificate(
    cert_id         UUID PRIMARY KEY DEFAULT gen_random_uuid,
    cvId            UUID not null  REFERENCES cv_id(cv) on delete cascade,
    certName        VARCHAR(30),
    institution     VARCHAR(50)  not NULL,
    year            date
);  

CREATE TABLE  project (
    project_id      UUID PRIMARY KEY DEFAULT gen_random_uuid,
    cvId            UUID not null REFERENCES cv(cv_id) on delete cascade,
    projName        VARCHAR(50) NOT NULL,
    description     TEXT,
    link            VARCHAR(100) 
);

CREATE TABLE cvVersion (
    cvVersion_id        UUID PRIMARY KEY DEFAULT gen_random_uuid,
    cvId                UUID not null REFERENCES cv_id(cv),
    createdAt           timestamp current_timestamp,
    updatedAt           timestamp current_timestamp   
);

CREATE TABLE templates(
    template_id      UUID PRIMARY key DEFAULT gen_random_uuid,
    tempName         VARCHAR(50) NOT NULL

);

-- ========================
-- CRIAÇÃO DAS SEQUENCES: Mecanismo para os campos auto-incrementaios
-- ======================
create SEQUENCE user_id_seq;
create SEQUENCE cv_id_seq;
create SEQUENCE cvVersion_id_seq;
create SEQUENCE template_id_seq;
create SEQUENCE project_id_seq;
create SEQUENCE personalInfo_id_seq;
create SEQUENCE certificate_id_seq;
create SEQUENCE language_id_seq;
create SEQUENCE skill_id_seq;
create SEQUENCE experience_id_seq;
create SEQUENCE education_id_seq;
  