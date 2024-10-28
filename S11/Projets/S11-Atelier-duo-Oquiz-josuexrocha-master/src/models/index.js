const Answer = require('./Answer');
const Level = require('./Level');
const Question = require('./Question');
const Quiz = require('./Quiz');
const Tag = require('./Tag');
const User = require('./User');
const QuizResult = require('./QuizResult');
const Role = require('./Role');

// Associations
Level.hasMany(Question);
Question.belongsTo(Level);

Quiz.hasMany(Question);
Question.belongsTo(Quiz);

User.hasMany(Quiz);
Quiz.belongsTo(User, { as: 'author', foreignKey: 'user_id' });

Question.hasMany(Answer);
Question.hasOne(Answer, {
  as: 'goodAnswer',
  foreignKey: 'question_id'
});
Answer.belongsTo(Question);

Quiz.belongsToMany(Tag, { through: 'quiz_has_tag' });
Tag.belongsToMany(Quiz, { through: 'quiz_has_tag' });

User.hasMany(QuizResult);
QuizResult.belongsTo(User);

Quiz.hasMany(QuizResult);
QuizResult.belongsTo(Quiz);

User.belongsTo(Role);
Role.hasMany(User);

module.exports = {
  Answer,
  Level,
  Question,
  Quiz,
  Tag,
  User,
  QuizResult,
  Role
};