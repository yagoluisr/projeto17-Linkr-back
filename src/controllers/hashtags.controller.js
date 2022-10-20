import { serverErrorResponse, okResponse } from "./controllers.helper.js";

import { getTrends } from "../repositories/hashtags.repository.js";

async function GetTrendingHashtags(req, res) {
  try {
    const trendingHashtags = await getTrends();
    okResponse(res, trendingHashtags.rows[0]);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { GetTrendingHashtags };
