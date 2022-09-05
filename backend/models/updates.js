module.exports = (sequelize, DataTypes) => {
  const Updates = sequelize.define('Updates', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    postId: DataTypes.INTEGER,
    oldTitle: DataTypes.STRING,
    oldContent: DataTypes.STRING,
    oldDate: DataTypes.STRING,
    updateDate: DataTypes.STRING,
  }, {
    tableName: 'Updates',
    timestamps: false,
  });

  Updates.associate = (models) => {
    Updates.belongsTo(models.Posts, {
      foreignKey: 'postId',
      as: 'posts'
    })
  }

  return Updates
}