class User extends Model {
    static tableName = 'user';
  
    static relationMappings = {
      messages: {
        relation: Model.ManyToManyRelation,
        modelClass: Messages,
        join: {
          from: 'user.id',
          through: {
            // persons_movies is the join table.
            from: 'user_chat_user_id',
            to: 'user_chat_user_id'
          },
          to: 'message_user_id'
        }
      }
    }
  }
  