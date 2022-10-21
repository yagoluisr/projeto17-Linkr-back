import { serverErrorResponse, okResponse } from "./controllers.helper.js";

import { getTrends } from "../repositories/hashtags.repository.js";

async function getTrendingHashtags(req, res) {

  try {
    const trendingHashtags = await getTrends();
    okResponse(res, trendingHashtags.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { getTrendingHashtags };
