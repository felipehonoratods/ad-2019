const Friend = require('../models/Friend');

module.exports = {
  async index(request, response) {
    const friends = await Friend.find();

    return response.json(friends);
  },

  async store(request, response) {
    const friend = await Friend.create(request.body);

    return response.json(friend);
  },

  async show(request, response) {
    const friend = await Friend.findById(request.params.id);

    return response.json(friend);
  },

  async update(request, response) {
    const friend = await Friend.findByIdAndUpdate(request.params.id, request.body, { new: true });

    return response.json(friend);
  },

  async destroy(request, response) {
    await Friend.findByIdAndRemove(request.params.id);

    return response.send();
  }
};