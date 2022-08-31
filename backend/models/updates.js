module.exports = (sequelize, DataTypes) => {
  const Updates = sequelize.define('Updates', {
    id: { type: DataTypes.INTEGER, primaryLey: true, autoIncrement: true },
    postId: DataTypes.INTEGER,
    oldTitle: DataTypes.STRING,
    oldContent: DataTypes.STRING,
    oldDate: DataTypes.DATE,
    updateDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
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