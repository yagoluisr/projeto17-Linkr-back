import * as responses from "./controllers.helper.js";
import * as timelineRepository from "../repositories/timeline.repository.js";
import { timelineSchemas } from "../schemas/schemas.js";
import * as hashtagsRepository from "../repositories/hashtags.repository.js";

async function postTimeline(req, res) {
  const user_id = res.locals.user.id;
  const { link, description } = res.locals.body;
  const hashtags = res.locals.hashtags;

  try {
    const post = await timelineRepository.insertPost({
      user_id,
      link,
      description,
    });
    const postId = post.rows[0].id;

    const handleHashtags = hashtags?.forEach(async (hashtag) => {
      const name = hashtag.replace("#", "");
      const selectedHash = await hashtagsRepository.getHashtagByName(name);
      if (selectedHash.rowCount === 0) {
        const newHash = await hashtagsRepository.insertNewHashtag(name);
        await hashtagsRepository.insertOnPost_Hashtag(
          postId,
          newHash.rows[0].id
        );
      } else {
        await hashtagsRepository.insertOnPost_Hashtag(
          postId,
          selectedHash.rows[0].id
        );
      }
    });

    responses.createdResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function editTimelinePost(req, res) {
  const id = res.locals.id;
  const { description } = req.body;
  const validation = timelineSchemas["updatePost"].validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    return responses.unprocessableResponse(res, errors);
  }

  try {
    await timelineRepository.updatePost({ description, id });

    responses.okResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function deleteTimelinePost(req, res) {
  const { id } = res.locals;
  try {
    await timelineRepository.deletePost(id);
    responses.okResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function getUser(req, res) {
  const user = res.locals.user;

  responses.okResponse(res, user);
}

async function getTimeline(req, res) {
  try {
    const timeline = await timelineRepository.fetchTimeline();

    responses.okResponse(res, timeline.rows);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

export {
  postTimeline,
  getUser,
  getTimeline,
  editTimelinePost,
  deleteTimelinePost,
};
