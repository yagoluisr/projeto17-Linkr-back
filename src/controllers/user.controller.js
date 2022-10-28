import { findUserById } from "../repositories/timeline.repository.js";
import * as userRepository from "../repositories/user.repository.js";
import * as responses from "./controllers.helper.js";

async function filterUser(req, res) {
  const { username } = req.params;
  const user = res.locals.user;

  try {
    const filteredUserName = (await userRepository.getByUserName(username))
      .rows;

    const userFollows = (await userRepository.getUserFollows(user.id)).rows.map(
      (user) => user.followed_user_id
    );

    filteredUserName.map((user) => {
      if (userFollows.includes(user.id)) {
        return (user.follow = true);
      }
      return (user.follows = false);
    });

    responses.okResponse(res, filteredUserName);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function filterUserPosts(req, res) {
  const { id } = req.params;
  let pages = req.params.pages;

  if (pages <= 1) {
    pages = 1;
  }

  const items = pages * 10;

  try {
    const filteredUserPosts = await userRepository.getUserPosts(id, items);

    return responses.okResponse(res, filteredUserPosts.rows);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function getUserFollows(req, res) {
  const { id } = req.params;
  const { user } = res.locals;
  try {
    const followedUsers = await userRepository.selectUserFollows(id, user.id);
    responses.okResponse(res, followedUsers.rows);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function filterUserById(req, res) {
  const { id } = req.params;

  try {
    const filteredUser = await userRepository.getUserById(id);

    if (filteredUser.rowCount === 0) return responses.notFoundResponse(res);

    responses.okResponse(res, filteredUser.rows[0]);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

export { filterUser, filterUserPosts, getUserFollows, filterUserById };
