const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      foreignKey: true,
      primaryKey: true,
      field: 'post_id',
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPost',
        key: 'id'
      }
    },
    categoryId: {
      allowNull: false,
      foreignKey: true,
      primaryKey: true,
      field: 'category_id',
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
      through: 'PostCategory', 
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostCategory', 
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = PostCategoryModel;