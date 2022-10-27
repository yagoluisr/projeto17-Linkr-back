import * as responses from "./controllers.helper.js";
import * as shareRepository from "../repositories/share.repository.js";
import * as timelineRepository from "../repositories/timeline.repository.js";

async function sharePost(req, res) {
  const { user, id } = res.locals;
  const user_id = user.id;

  try {
    const { original_post, original_user_id, link, description } = (
      await timelineRepository.getDataForRePost(id)
    ).rows[0];

    await timelineRepository.insertRePost(
      original_user_id,
      link,
      description,
      user_id,
      original_post
    );

    await shareRepository.insertShare(user_id, id);
    responses.okResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function deleteSharedPost(req, res) {
  const { user, id } = res.locals;

  try {
    await shareRepository.deleteShare(user.id, id);
    responses.noContentResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function getShares(req, res) {
  const { user, id } = res.locals;

  try {
    const shares = await shareRepository.getPostSharesNumber(id);
    responses.okResponse(res, shares);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

export { getShares, sharePost, deleteSharedPost };
