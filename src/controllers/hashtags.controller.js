import { serverErrorResponse, okResponse } from "./controllers.helper.js";

import {
  getTrends,
  getTimelineByHashtag,
} from "../repositories/hashtags.repository.js";

async function getTrendingHashtags(req, res) {
  try {
    const trendingHashtags = await getTrends();
    okResponse(res, trendingHashtags.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function getPostsByHashName(req, res) {
  const name = req.params.hashtag;
  try {
    const postsData = await getTimelineByHashtag(name);
    okResponse(res, postsData.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { getTrendingHashtags, getPostsByHashName };
