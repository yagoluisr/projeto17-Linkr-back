import {
  deleteLike,
  getPostLikedByUser,
  insertLike,
  getPostLikesNumber,
  getUsersLikesPost,
} from "../repositories/like.repository.js";
import * as responses from "./controllers.helper.js";

async function getLike(req, res) {
  const { user, id } = res.locals;

  try {
    const like = await getPostLikedByUser(user.id, id);
    const likesNumber = await getPostLikesNumber(id);
    let usersLikePost = (await getUsersLikesPost(id)).rows.map(
      (user) => user.name
    );

    if (!like.rows[0]) {
      responses.okResponse(res, {
        likedByUser: false,
        ...likesNumber.rows[0],
        users: [usersLikePost],
      });
      return;
    }

    responses.okResponse(res, {
      likedByUser: true,
      ...likesNumber.rows[0],
      users: [usersLikePost],
    });
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function likePost(req, res) {
  const { user, id } = res.locals;

  try {
    await insertLike(user.id, id);

    responses.okResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function dislikePost(req, res) {
  const { user, id } = res.locals;

  try {
    await deleteLike(user.id, id);

    responses.noContentResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

export { getLike, likePost, dislikePost };
