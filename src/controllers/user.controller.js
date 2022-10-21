import * as userRepository from "../repositories/user.repository.js";

async function filterUser (req,res) {
    const { username } = req.params;
    
    try {
        const filteredUserName = (await userRepository.getByUserName(username)).rows;

        res.send(filteredUserName);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export { filterUser };