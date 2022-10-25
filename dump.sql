--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: hashtags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.hashtags (
    id integer NOT NULL,
    name character varying(40) NOT NULL
);


--
-- Name: hashtags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hashtags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hashtags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.hashtags_id_seq OWNED BY public.hashtags.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    user_id integer NOT NULL,
    post_id integer NOT NULL
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: post_hashtags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.post_hashtags (
    id integer NOT NULL,
    post_id integer NOT NULL,
    hashtag_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'BRT'::text) NOT NULL
);


--
-- Name: post_hashtags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.post_hashtags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: post_hashtags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.post_hashtags_id_seq OWNED BY public.post_hashtags.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    link text NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'BRT'::text) NOT NULL
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL,
    created_at timestamp without time zone DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'BRT'::text) NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    email character varying(100) NOT NULL,
    password text NOT NULL,
    image_url text NOT NULL,
    created_at timestamp without time zone DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'BRT'::text) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: hashtags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags ALTER COLUMN id SET DEFAULT nextval('public.hashtags_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: post_hashtags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_hashtags ALTER COLUMN id SET DEFAULT nextval('public.post_hashtags_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: hashtags; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.hashtags VALUES (1, 'oi');
INSERT INTO public.hashtags VALUES (2, 'teste');
INSERT INTO public.hashtags VALUES (3, 'wq');
INSERT INTO public.hashtags VALUES (4, 'naotem');
INSERT INTO public.hashtags VALUES (5, 'a');
INSERT INTO public.hashtags VALUES (6, 'z');
INSERT INTO public.hashtags VALUES (7, 'za');
INSERT INTO public.hashtags VALUES (8, 'we');
INSERT INTO public.hashtags VALUES (9, 'www');
INSERT INTO public.hashtags VALUES (10, 'popp');
INSERT INTO public.hashtags VALUES (11, 'ola');
INSERT INTO public.hashtags VALUES (12, '?');
INSERT INTO public.hashtags VALUES (13, 'aaa');
INSERT INTO public.hashtags VALUES (14, 'zzz');
INSERT INTO public.hashtags VALUES (15, 'qqqqqq');
INSERT INTO public.hashtags VALUES (16, 'zzzz');
INSERT INTO public.hashtags VALUES (17, 'oiii');
INSERT INTO public.hashtags VALUES (18, 'aab');
INSERT INTO public.hashtags VALUES (19, 'hdfs');
INSERT INTO public.hashtags VALUES (20, 'aa');
INSERT INTO public.hashtags VALUES (21, 'bb');
INSERT INTO public.hashtags VALUES (22, 'ac');
INSERT INTO public.hashtags VALUES (23, 'asas');
INSERT INTO public.hashtags VALUES (24, '');
INSERT INTO public.hashtags VALUES (25, '/');
INSERT INTO public.hashtags VALUES (26, ',');
INSERT INTO public.hashtags VALUES (27, 'o');
INSERT INTO public.hashtags VALUES (28, '22');
INSERT INTO public.hashtags VALUES (29, 'A');
INSERT INTO public.hashtags VALUES (30, '33');
INSERT INTO public.hashtags VALUES (31, 'qw');


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.likes VALUES (1, 1, 31);
INSERT INTO public.likes VALUES (2, 1, 32);
INSERT INTO public.likes VALUES (3, 1, 33);
INSERT INTO public.likes VALUES (5, 1, 29);
INSERT INTO public.likes VALUES (6, 1, 53);
INSERT INTO public.likes VALUES (7, 1, 51);
INSERT INTO public.likes VALUES (14, 1, 61);
INSERT INTO public.likes VALUES (15, 1, 60);
INSERT INTO public.likes VALUES (16, 1, 62);
INSERT INTO public.likes VALUES (17, 2, 62);
INSERT INTO public.likes VALUES (18, 2, 63);
INSERT INTO public.likes VALUES (19, 2, 61);


--
-- Data for Name: post_hashtags; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.post_hashtags VALUES (1, 1, 1, '2022-10-20 18:32:14.523267');
INSERT INTO public.post_hashtags VALUES (2, 28, 8, '2022-10-21 14:34:07.715647');
INSERT INTO public.post_hashtags VALUES (3, 29, 1, '2022-10-21 14:36:33.756435');
INSERT INTO public.post_hashtags VALUES (4, 29, 8, '2022-10-21 14:36:33.831606');
INSERT INTO public.post_hashtags VALUES (5, 29, 9, '2022-10-21 14:36:33.832526');
INSERT INTO public.post_hashtags VALUES (6, 30, 10, '2022-10-21 14:39:27.690671');
INSERT INTO public.post_hashtags VALUES (7, 31, 1, '2022-10-21 19:18:35.397296');
INSERT INTO public.post_hashtags VALUES (8, 31, 1, '2022-10-21 19:18:35.487268');
INSERT INTO public.post_hashtags VALUES (9, 31, 11, '2022-10-21 19:18:35.491051');
INSERT INTO public.post_hashtags VALUES (10, 32, 12, '2022-10-21 19:19:56.150068');
INSERT INTO public.post_hashtags VALUES (11, 32, 13, '2022-10-21 19:19:56.200381');
INSERT INTO public.post_hashtags VALUES (12, 33, 1, '2022-10-22 12:55:09.863103');
INSERT INTO public.post_hashtags VALUES (13, 34, 14, '2022-10-23 13:06:17.620318');
INSERT INTO public.post_hashtags VALUES (14, 35, 15, '2022-10-23 13:06:42.150652');
INSERT INTO public.post_hashtags VALUES (15, 36, 14, '2022-10-23 13:06:58.514843');
INSERT INTO public.post_hashtags VALUES (16, 37, 16, '2022-10-23 13:07:08.974571');
INSERT INTO public.post_hashtags VALUES (17, 38, 14, '2022-10-23 13:07:18.251978');
INSERT INTO public.post_hashtags VALUES (22, 40, 17, '2022-10-23 16:46:57.356888');
INSERT INTO public.post_hashtags VALUES (23, 40, 18, '2022-10-23 16:46:57.413765');
INSERT INTO public.post_hashtags VALUES (24, 40, 19, '2022-10-23 16:46:57.414994');
INSERT INTO public.post_hashtags VALUES (25, 42, 20, '2022-10-23 16:55:09.882703');
INSERT INTO public.post_hashtags VALUES (26, 42, 21, '2022-10-23 16:55:09.960677');
INSERT INTO public.post_hashtags VALUES (27, 42, 22, '2022-10-23 16:55:09.961434');
INSERT INTO public.post_hashtags VALUES (28, 44, 13, '2022-10-23 16:56:22.941468');
INSERT INTO public.post_hashtags VALUES (29, 45, 23, '2022-10-23 17:36:16.13658');
INSERT INTO public.post_hashtags VALUES (30, 46, 13, '2022-10-23 17:36:45.683978');
INSERT INTO public.post_hashtags VALUES (31, 47, 24, '2022-10-24 12:12:46.331331');
INSERT INTO public.post_hashtags VALUES (32, 47, 25, '2022-10-24 12:12:46.394529');
INSERT INTO public.post_hashtags VALUES (33, 47, 26, '2022-10-24 12:12:46.395312');
INSERT INTO public.post_hashtags VALUES (34, 48, 24, '2022-10-24 12:13:02.165557');
INSERT INTO public.post_hashtags VALUES (35, 48, 25, '2022-10-24 12:13:02.243533');
INSERT INTO public.post_hashtags VALUES (36, 48, 26, '2022-10-24 12:13:02.243998');
INSERT INTO public.post_hashtags VALUES (37, 49, 26, '2022-10-24 12:13:09.83075');
INSERT INTO public.post_hashtags VALUES (38, 49, 24, '2022-10-24 12:13:09.831323');
INSERT INTO public.post_hashtags VALUES (39, 49, 25, '2022-10-24 12:13:09.831852');
INSERT INTO public.post_hashtags VALUES (40, 50, 27, '2022-10-24 12:15:18.032351');
INSERT INTO public.post_hashtags VALUES (41, 51, 27, '2022-10-24 12:16:12.170662');
INSERT INTO public.post_hashtags VALUES (42, 52, 27, '2022-10-24 12:16:21.770382');
INSERT INTO public.post_hashtags VALUES (43, 53, 13, '2022-10-24 12:17:37.899597');
INSERT INTO public.post_hashtags VALUES (44, 53, 28, '2022-10-24 12:17:37.931304');
INSERT INTO public.post_hashtags VALUES (45, 54, 20, '2022-10-24 12:29:10.077443');
INSERT INTO public.post_hashtags VALUES (46, 54, 29, '2022-10-24 12:29:10.120514');
INSERT INTO public.post_hashtags VALUES (47, 58, 28, '2022-10-24 12:41:42.635716');
INSERT INTO public.post_hashtags VALUES (48, 59, 30, '2022-10-24 12:41:52.945432');
INSERT INTO public.post_hashtags VALUES (49, 60, 20, '2022-10-24 12:42:02.902375');
INSERT INTO public.post_hashtags VALUES (50, 61, 13, '2022-10-24 13:16:21.904836');
INSERT INTO public.post_hashtags VALUES (51, 62, 20, '2022-10-24 13:16:38.180281');
INSERT INTO public.post_hashtags VALUES (52, 63, 31, '2022-10-24 14:03:03.483205');


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.posts VALUES (1, 1, 'https://www.google.com', 'oi #oi', '2022-10-20 12:33:29.856391');
INSERT INTO public.posts VALUES (2, 1, 'https://www.google.com', 'hehe   #teste', '2022-10-20 19:19:00.877519');
INSERT INTO public.posts VALUES (3, 1, 'https://www.google.com', 'fgfdgdfgfdg', '2022-10-20 20:39:57.495874');
INSERT INTO public.posts VALUES (4, 1, 'https://www.google.com', 'weqweq #gfdgdf', '2022-10-20 20:40:07.780212');
INSERT INTO public.posts VALUES (5, 1, 'https://www.google.com', 'oiiii #oi', '2022-10-21 09:42:56.70766');
INSERT INTO public.posts VALUES (6, 1, 'https://www.google.com', 'asd sada#oiii sd a sda sd #aaaa', '2022-10-21 11:04:35.084744');
INSERT INTO public.posts VALUES (7, 1, 'https://www.google.com', 'oi teste esse e um teste #teste oi#teste ola ola ola #oi#aaa', '2022-10-21 11:05:24.87004');
INSERT INTO public.posts VALUES (8, 1, 'https://www.google.com', 'oiiii #oi#olatestanto estou testando sera q pega todas as #hashtags?#?', '2022-10-21 11:09:33.345267');
INSERT INTO public.posts VALUES (9, 1, 'https://www.google.com', 'Mmmm #yummy #donut at #CZ#oi #olaa hiji', '2022-10-21 11:46:39.297327');
INSERT INTO public.posts VALUES (10, 1, 'https://www.google.com', 'aaaa #oi', '2022-10-21 13:41:35.26738');
INSERT INTO public.posts VALUES (11, 1, 'https://www.google.com', '123 #oi', '2022-10-21 13:42:15.072009');
INSERT INTO public.posts VALUES (12, 1, 'https://www.google.com', 'jhhhj', '2022-10-21 13:43:24.15719');
INSERT INTO public.posts VALUES (13, 1, 'https://www.google.com', 'jhhhj', '2022-10-21 13:43:43.764659');
INSERT INTO public.posts VALUES (14, 1, 'https://www.google.com', 'jhhhj', '2022-10-21 13:44:03.058061');
INSERT INTO public.posts VALUES (15, 1, 'https://www.google.com', 'Nutri #wq', '2022-10-21 13:44:21.48908');
INSERT INTO public.posts VALUES (16, 1, 'https://www.google.com', 'asa', '2022-10-21 13:44:28.129466');
INSERT INTO public.posts VALUES (17, 1, 'https://www.google.com', 'asa', '2022-10-21 13:45:09.293135');
INSERT INTO public.posts VALUES (18, 1, 'https://www.google.com', 'asa', '2022-10-21 13:45:26.348043');
INSERT INTO public.posts VALUES (19, 1, 'https://www.google.com', 'oi #oi', '2022-10-21 13:45:54.346554');
INSERT INTO public.posts VALUES (20, 1, 'https://www.google.com', 'sadas', '2022-10-21 13:47:39.395086');
INSERT INTO public.posts VALUES (21, 1, 'https://www.google.com', 'sadsad #oi', '2022-10-21 13:47:49.926938');
INSERT INTO public.posts VALUES (22, 1, 'https://www.google.com', 'Nutri #oi', '2022-10-21 13:48:04.958862');
INSERT INTO public.posts VALUES (23, 1, 'https://www.google.com', 'aaaa #naotem', '2022-10-21 13:48:27.534487');
INSERT INTO public.posts VALUES (24, 1, 'https://www.google.com', 'oioiio #oi #a', '2022-10-21 14:11:06.824918');
INSERT INTO public.posts VALUES (25, 1, 'https://www.google.com', 'sjahdjsa #oi', '2022-10-21 14:15:28.224332');
INSERT INTO public.posts VALUES (26, 1, 'https://www.google.com', 'hjksahds #z', '2022-10-21 14:32:28.929755');
INSERT INTO public.posts VALUES (27, 1, 'https://www.google.com', 'gfgfdg #za', '2022-10-21 14:33:10.538948');
INSERT INTO public.posts VALUES (28, 1, 'https://www.google.com', '#we', '2022-10-21 14:34:07.706045');
INSERT INTO public.posts VALUES (29, 1, 'https://www.google.com', 'sdasdkasd #oi #www #we', '2022-10-21 14:36:33.749224');
INSERT INTO public.posts VALUES (30, 1, 'https://www.google.com', 'aaaa #popp', '2022-10-21 14:39:27.686431');
INSERT INTO public.posts VALUES (31, 1, 'https://www.google.com', 'oi #oi#oi#ola', '2022-10-21 19:18:35.390399');
INSERT INTO public.posts VALUES (32, 1, 'https://www.google.com', '#? sadasd #aaa', '2022-10-21 19:19:56.141793');
INSERT INTO public.posts VALUES (33, 1, 'https://www.google.com', 'asdasdas #oi', '2022-10-22 12:55:09.853262');
INSERT INTO public.posts VALUES (34, 1, 'https://www.google.com', 'teste #zzz', '2022-10-23 13:06:17.612849');
INSERT INTO public.posts VALUES (35, 1, 'https://www.google.com', 'asdasd #qqqqqq', '2022-10-23 13:06:42.144967');
INSERT INTO public.posts VALUES (36, 1, 'https://www.google.com', 'asdasd #zzz', '2022-10-23 13:06:58.509631');
INSERT INTO public.posts VALUES (37, 1, 'https://www.google.com', 'sdasdas #zzzz', '2022-10-23 13:07:08.968075');
INSERT INTO public.posts VALUES (38, 1, 'https://www.google.com', '123 #zzz', '2022-10-23 13:07:18.247301');
INSERT INTO public.posts VALUES (40, 1, 'https://www.google.com', '#oiii. #aab #hdfs', '2022-10-23 16:46:57.349985');
INSERT INTO public.posts VALUES (41, 1, 'https://www.google.com', '#;', '2022-10-23 16:47:18.454708');
INSERT INTO public.posts VALUES (42, 1, 'https://www.google.com', 'dsaasd #aa #bb #ac.', '2022-10-23 16:55:09.877038');
INSERT INTO public.posts VALUES (43, 1, 'https://www.google.com', 'adsda', '2022-10-23 16:56:14.860604');
INSERT INTO public.posts VALUES (44, 1, 'https://www.google.com', 'sad #aaa', '2022-10-23 16:56:22.934558');
INSERT INTO public.posts VALUES (45, 1, 'https://www.google.com', 'dzsdasd #asas', '2022-10-23 17:36:16.130602');
INSERT INTO public.posts VALUES (46, 1, 'https://www.google.com', 'sadsd #aaa #@', '2022-10-23 17:36:45.680872');
INSERT INTO public.posts VALUES (47, 1, 'https://www.google.com', '#. #, #/', '2022-10-24 12:12:46.324927');
INSERT INTO public.posts VALUES (48, 1, 'https://www.google.com', '#. #, #/', '2022-10-24 12:13:02.161128');
INSERT INTO public.posts VALUES (49, 1, 'https://www.google.com', '#. #, #/', '2022-10-24 12:13:09.825336');
INSERT INTO public.posts VALUES (50, 1, 'https://www.google.com', '#o.2', '2022-10-24 12:15:18.02663');
INSERT INTO public.posts VALUES (51, 1, 'https://www.google.com', '#o.2', '2022-10-24 12:16:12.167938');
INSERT INTO public.posts VALUES (52, 1, 'https://www.google.com', '#o.2', '2022-10-24 12:16:21.76404');
INSERT INTO public.posts VALUES (53, 1, 'https://www.google.com', '#aaa #22', '2022-10-24 12:17:37.896595');
INSERT INTO public.posts VALUES (54, 1, 'https://www.google.com', '#aa #A2 #33 #3a', '2022-10-24 12:29:10.066094');
INSERT INTO public.posts VALUES (55, 1, 'https://www.google.com', '#444', '2022-10-24 12:30:04.521082');
INSERT INTO public.posts VALUES (56, 1, 'https://www.google.com', '#444', '2022-10-24 12:30:17.513004');
INSERT INTO public.posts VALUES (57, 1, 'https://www.google.com', '#444', '2022-10-24 12:30:23.82499');
INSERT INTO public.posts VALUES (58, 1, 'https://www.google.com', '#22', '2022-10-24 12:41:42.63239');
INSERT INTO public.posts VALUES (59, 1, 'https://www.google.com', '#33', '2022-10-24 12:41:52.94084');
INSERT INTO public.posts VALUES (60, 1, 'https://www.google.com', '#aa.33', '2022-10-24 12:42:02.898764');
INSERT INTO public.posts VALUES (61, 1, 'https://www.google.com', '#aaa/22', '2022-10-24 13:16:21.902377');
INSERT INTO public.posts VALUES (62, 1, 'https://www.google.com', '#aa.22', '2022-10-24 13:16:38.17724');
INSERT INTO public.posts VALUES (63, 2, 'https://www.google.com', 'asas #qw', '2022-10-24 14:03:03.479217');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYyNzk5ODZ9.024CdqqWlTGdUiFB_RjnX4ZyaxGaRj3Mw6PuIT1ZBeU', '2022-10-20 12:33:06.501521');
INSERT INTO public.sessions VALUES (2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYyOTg4MjN9.ceu4vFy-oewgHG1dpu6FGTGQ1g0hGCIkvlE6HBjA3ss', '2022-10-20 17:47:03.672269');
INSERT INTO public.sessions VALUES (3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzMDI4MTN9.dwX0iYkuWBYmqDuqBRz_MmlHFfLL0lot3Yr29a4udTQ', '2022-10-20 18:53:33.561495');
INSERT INTO public.sessions VALUES (4, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzMDQwOTZ9.FSBz83NV9AXG49Y1cxvgJp6yz2O4uPF5NuoWxgz3B4k', '2022-10-20 19:14:56.711255');
INSERT INTO public.sessions VALUES (5, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzMDgwODJ9.uoQEdiUqQGR-fPjsCA2rrNICqC51-DDFb4RKnPC8tNg', '2022-10-20 20:21:22.760357');
INSERT INTO public.sessions VALUES (6, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzNTU3OTV9.hcv1_VnPUQ28lBzztqFjJO_yaofLB7k2qpfRZ7lK-0U', '2022-10-21 09:36:35.696457');
INSERT INTO public.sessions VALUES (7, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzNzU4NTV9.kebGWq5u-ocefJQWv6i4ntuwQg6tPgVQClyo_T967a0', '2022-10-21 15:10:55.272891');
INSERT INTO public.sessions VALUES (8, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzNzYwMjR9.-us_iHjyF9DJJZFYlYIYaoreHChKrNmSOw3nifFhhA8', '2022-10-21 15:13:44.548455');
INSERT INTO public.sessions VALUES (9, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzODgwNTJ9.PkRFoIkkOtER31P0dv8Ux2IO9YKG0tCUKSneSjDabuU', '2022-10-21 18:34:12.647573');
INSERT INTO public.sessions VALUES (10, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzODgyNTF9.PFZzIuEuXSzTGC7TK2du3yY2Iie3RgEzreMhKxtH2u0', '2022-10-21 18:37:31.968915');
INSERT INTO public.sessions VALUES (11, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjYzOTA3MDF9.P1lPESKHXDJkH8RlhM-WI3Vy2bvxjbMjHEMWqqvikwQ', '2022-10-21 19:18:21.805491');
INSERT INTO public.sessions VALUES (12, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjY0NTAwNjV9.cNNI4WFcs8F_d8CDpll4kUGPBEcx5Hm48xlF0elqKYI', '2022-10-22 11:47:45.73296');
INSERT INTO public.sessions VALUES (13, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjY0NTA2OTB9.Y6QAVgbSgIT5UVZ_vFbFCSGwStHzrk4m4jSATVlKVos', '2022-10-22 11:58:10.937759');
INSERT INTO public.sessions VALUES (14, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjY1MzgyMzF9.PXVBVbRH2BR8egFng6x19TaO_aWqchdyqdqF0iRpN1o', '2022-10-23 12:17:11.141882');
INSERT INTO public.sessions VALUES (18, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjY1NDExNjd9.3Kg0cvesSJrtRj1TJUmwbM4XeZwCZMRmVPBU_637D-A', '2022-10-23 13:06:07.404572');
INSERT INTO public.sessions VALUES (20, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjY1NTQ4OTd9.kvYF5xpk67wrPQ5VQ9nIbJQsN36H_MNBB-f53zVv4d0', '2022-10-23 16:54:57.459778');
INSERT INTO public.sessions VALUES (22, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjY1NTczOTh9.GKURJ_OZMKqQKgmq947d5YvAnwoXjsRFfyNRRF6NPbk', '2022-10-23 17:36:38.062642');
INSERT INTO public.sessions VALUES (23, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjY2MjQzMTZ9.WiZLcfqxMEPLObtjqwLNRSy_W2tZG7f8OqAaUZ7ntvA', '2022-10-24 12:11:56.072651');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'thiago', 'thiago@teste.com', '$2b$10$/4OMkk8Pf...f.sma0ALyeuy2a3EM/Cq2XqwLBAo25EErgy4g7iZu', 'https://static.wikia.nocookie.net/terramedia/images/e/e5/Gandalf_-_Ol%C3%B3rin.jpg/revision/latest?cb=20220706164107', '2022-10-20 12:32:44.266814');
INSERT INTO public.users VALUES (2, 'thiago', 'aaa@teste.com', '$2b$10$dif2sFT/K.0snJw.aHvi0OZx9pXhb1qlusR0Aw0RE8GlwLkthLBAy', 'https://static.wikia.nocookie.net/terramedia/images/e/e5/Gandalf_-_Ol%C3%B3rin.jpg/revision/latest?cb=20220706164107', '2022-10-24 14:02:36.726057');


--
-- Name: hashtags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hashtags_id_seq', 31, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 25, true);


--
-- Name: post_hashtags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.post_hashtags_id_seq', 52, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 63, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 29, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: hashtags hashtags_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_name_key UNIQUE (name);


--
-- Name: hashtags hashtags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_pkey PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: post_hashtags post_hashtags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_hashtags
    ADD CONSTRAINT post_hashtags_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: likes likes_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: likes likes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: post_hashtags post_hashtags_hashtag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_hashtags
    ADD CONSTRAINT post_hashtags_hashtag_id_fkey FOREIGN KEY (hashtag_id) REFERENCES public.hashtags(id);


--
-- Name: post_hashtags post_hashtags_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_hashtags
    ADD CONSTRAINT post_hashtags_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

CREATE TABLE public.comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES "users"("id"),
    post_id INTEGER NOT NULL REFERENCES "posts"("id"),
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'BRT'::text) NOT NULL
);
