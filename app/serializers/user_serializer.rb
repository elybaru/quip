class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  attribute :conversations do |user|
    user.conversations.uniq
  end
end
