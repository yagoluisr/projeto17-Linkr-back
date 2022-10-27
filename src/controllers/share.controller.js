import * as responses from "./controllers.helper.js";
import * as shareRepository from "../repositories/share.repository.js";

async function sharePost(req, res) {
  const { user, id } = res.locals;
  try {
    await shareRepository.insertShare(user.id, id);
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
