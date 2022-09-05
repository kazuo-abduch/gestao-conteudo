module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    createDate: DataTypes.STRING,
  }, {
    tableName: 'Posts',
    timestamps: false,
  });

  Posts.associate = (models) => {
    Posts.hasMany(models.Updates, {
      foreignKey: 'postId',
      as: 'updates',
    })
  }

  return Posts
}