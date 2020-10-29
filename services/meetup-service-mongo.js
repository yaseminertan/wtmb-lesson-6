const BaseService = require('./base-service-mongo')
const MeetupModel = require('../models/meetup-mongo')

class MeetupService extends BaseService {
    model = MeetupModel
}

module.exports = new MeetupService()